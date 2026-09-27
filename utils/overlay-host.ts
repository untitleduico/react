"use client";

import type { CSSProperties, RefObject } from "react";
import { useLayoutEffect, useSyncExternalStore } from "react";
import { isRTL, useLocale } from "react-aria-components";

/**
 * Overlays inside other libraries' modal layers.
 *
 * React Aria portals popovers and modals to `document.body`. Modal layers of
 * other libraries (Radix and Base UI, i.e. shadcn/ui's Dialog, Sheet,
 * AlertDialog and Drawer) block pointer events outside themselves, pull focus
 * back into themselves and dismiss on Escape, so an overlay of ours opened
 * from inside one of them is unusable at `document.body`. When the trigger
 * sits inside such a layer, our overlays render into it instead. Without a
 * foreign layer nothing changes: same portal, same DOM.
 */

/** Dialogs rendered by another library. React Aria's own dialogs carry `data-rac` and keep React Aria's handling. */
const HOST_LAYER = ':is([role="dialog"], [role="alertdialog"]):not([data-rac])';

/** Marks an overlay of ours rendered inside a host layer (see `guardEscape`). */
export const IN_HOST_LAYER = "data-in-host-layer";

/** The other library's modal layer that contains `node`, if any. */
export const getHostLayer = (node: Element | null | undefined): HTMLElement | null => node?.closest<HTMLElement>(HOST_LAYER) ?? null;

/** Shared listeners, so a page with many overlays adds one observer. */
const listeners = new Set<() => void>();
let observer: MutationObserver | null = null;

const notify = () => listeners.forEach((listener) => listener());

/** Re-reads snapshots when the page's `dir` or `lang` changes. */
const subscribe = (listener: () => void) => {
    listeners.add(listener);
    if (listeners.size === 1) {
        observer = new MutationObserver(notify);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["dir", "lang"] });
    }
    return () => {
        listeners.delete(listener);
        if (listeners.size === 0) {
            observer?.disconnect();
            observer = null;
        }
    };
};

/**
 * The host layer of the element that last received focus. Updated on `focusin`
 * only: while focus moves, `document.activeElement` is briefly `<body>`, and an
 * open overlay must not jump to `document.body` and back in between.
 */
const focusListeners = new Set<() => void>();
let focusedHost: HTMLElement | null = null;

const onFocusIn = (event: FocusEvent) => {
    const host = getHostLayer(event.target instanceof Element ? event.target : null);
    if (host === focusedHost) return;
    focusedHost = host;
    focusListeners.forEach((listener) => listener());
};

const subscribeFocus = (listener: () => void) => {
    focusListeners.add(listener);
    if (focusListeners.size === 1) {
        focusedHost = getHostLayer(document.activeElement);
        document.addEventListener("focusin", onFocusIn, true);
    }
    return () => {
        focusListeners.delete(listener);
        if (focusListeners.size === 0) document.removeEventListener("focusin", onFocusIn, true);
    };
};

const getFocusedHost = () => focusedHost;

const noHost = () => null;

/**
 * Escape inside our overlay should close our overlay only. Radix handles
 * Escape in a capture listener on `document`, before React sees the key, and
 * skips it when the event is already `defaultPrevented`. A capture listener
 * on `window` runs first; React Aria does not look at `defaultPrevented`.
 */
let escapeGuard = false;
const guardEscape = () => {
    if (escapeGuard || typeof window === "undefined") return;
    escapeGuard = true;
    window.addEventListener(
        "keydown",
        (event) => {
            if (event.key === "Escape" && event.target instanceof Element && event.target.closest(`[${IN_HOST_LAYER}]`)) event.preventDefault();
        },
        true,
    );
};

/**
 * The host layer an overlay anchored to `triggerRef` should render into, or
 * null to keep React Aria's default (`document.body`).
 */
export const useHostLayer = (triggerRef?: RefObject<Element | null> | null): HTMLElement | null => {
    const host = useSyncExternalStore(subscribe, () => getHostLayer(triggerRef?.current), noHost);
    useLayoutEffect(() => {
        if (host) guardEscape();
    }, [host]);
    return host;
};

/**
 * For overlays without a trigger element (modals opened from state): the host
 * layer that holds focus when they open. A foreign modal layer keeps focus
 * inside itself, so that is where the overlay was opened from.
 */
export const useFocusedHostLayer = (): HTMLElement | null => {
    const host = useSyncExternalStore(subscribeFocus, getFocusedHost, noHost);
    useLayoutEffect(() => {
        if (host) guardEscape();
    }, [host]);
    return host;
};

/**
 * A modal layer that is `position: fixed` and transformed (e.g. centred with
 * `translate(-50%, -50%)`) is the containing block of fixed descendants, so a
 * full-screen overlay rendered inside it would only cover the layer. Offsets
 * that put the overlay back over the viewport; `style` unchanged without a host.
 */
export const withHostLayerOffset = <T>(host: HTMLElement | null, style: StyleProp<T>): StyleProp<T> => {
    if (!host) return style;
    return (values: T) => ({ ...(typeof style === "function" ? style(values) : style), ...hostLayerOffset(host) });
};

type StyleProp<T> = CSSProperties | ((values: T) => CSSProperties | undefined) | undefined;

/** Whether `el` is the containing block of its `position: fixed` descendants (instead of the viewport). */
const containsFixed = (el: Element) => {
    const style = getComputedStyle(el);
    return (
        [style.transform, style.translate, style.scale, style.rotate, style.perspective, style.filter, style.backdropFilter].some(
            (value) => value && value !== "none",
        ) ||
        /paint|layout|strict|content/.test(style.contain) ||
        /transform|translate|scale|rotate|perspective|filter/.test(style.willChange) ||
        (!!style.containerType && style.containerType !== "normal")
    );
};

const hostLayerOffset = (host: HTMLElement): CSSProperties => {
    let block: HTMLElement | null = host;
    while (block && block !== document.body && !containsFixed(block)) block = block.parentElement;
    if (!block || block === document.body) return {};
    const rect = block.getBoundingClientRect();
    return {
        top: -(rect.top + block.clientTop),
        left: -(rect.left + block.clientLeft),
        right: "auto",
        bottom: "auto",
        width: "100vw",
        height: "100dvh",
    };
};

/** `lang` and explicit `dir` of the nearest element that sets them, starting at `node` (or the document). */
const readHost = (node: Element | null | undefined) => {
    if (typeof document === "undefined") return null;
    const start = node ?? document.documentElement;
    const dir = start.closest("[dir]")?.getAttribute("dir")?.toLowerCase();
    if (dir !== "rtl" && dir !== "ltr") return null;
    return `${dir}|${start.closest("[lang]")?.getAttribute("lang") ?? ""}`;
};

/**
 * React Aria takes direction from its locale (the browser language unless the
 * app sets an `I18nProvider`), not from the page. When the page sets `dir`
 * and it disagrees with that default locale, this returns a locale for the
 * page's direction: the page's `lang` when it has that direction, otherwise
 * a representative locale. Undefined (keep React Aria's locale) when the app
 * chose a locale with its own `I18nProvider`, or the directions agree.
 */
export const useHostLocale = (triggerRef?: RefObject<Element | null> | null): string | undefined => {
    const host = useSyncExternalStore(subscribe, () => readHost(triggerRef?.current), noHost);
    const { locale, direction } = useLocale();
    if (!host) return undefined;
    const [dir, lang] = host.split("|");
    if (dir === direction) return undefined;
    // A locale other than the browser's default was chosen by the app: respect it.
    if (typeof navigator !== "undefined" && navigator.language && locale !== navigator.language) return undefined;
    const wantRtl = dir === "rtl";
    if (lang && safeIsRtl(lang) === wantRtl) return lang;
    return wantRtl ? "ar" : "en-US";
};

const safeIsRtl = (locale: string) => {
    try {
        return isRTL(locale);
    } catch {
        return null;
    }
};

/**
 * While one of our modals is open, overlays another library opens from inside
 * it (a shadcn/ui DropdownMenu, Select or Popover) are portalled to
 * `document.body`, outside the modal, where React Aria makes them inert and
 * treats clicks and focus in them as outside the modal. Marking their roots as
 * a top layer (`data-react-aria-top-layer`, React Aria's own escape hatch for
 * toasts) keeps them usable. Only roots that are not React Aria's are marked.
 * Runs in a layout effect so its observer is notified before React Aria's.
 */
const FOREIGN_OVERLAY_ROOT =
    "[data-radix-popper-content-wrapper], [data-base-ui-portal], [data-floating-ui-portal], [data-state], [role=dialog], [role=alertdialog], [role=menu], [role=listbox], [role=tooltip]";

const isForeignOverlayRoot = (node: Node): node is HTMLElement =>
    node instanceof HTMLElement &&
    !node.hasAttribute("data-rac") &&
    !node.firstElementChild?.hasAttribute("data-rac") &&
    (node.matches(FOREIGN_OVERLAY_ROOT) || node.querySelector(FOREIGN_OVERLAY_ROOT) !== null);

export const useForeignOverlaysOnTop = (isOpen = true) => {
    useLayoutEffect(() => {
        if (!isOpen) return;
        const marked = new Set<HTMLElement>();
        const mark = (node: Node) => {
            // Not the layer our own overlay sits in (see `useFocusedHostLayer`).
            if (marked.has(node as HTMLElement) || !isForeignOverlayRoot(node) || node.querySelector(`[${IN_HOST_LAYER}]`)) return;
            node.setAttribute("data-react-aria-top-layer", "");
            marked.add(node);
        };
        const observer = new MutationObserver((records) => records.forEach((record) => record.addedNodes.forEach(mark)));
        observer.observe(document.body, { childList: true });
        // Some libraries focus their overlay in the same task that mounts it, before the observer
        // runs; mark it on the way in so React Aria's focus containment lets focus go there.
        const onFocusIn = (event: FocusEvent) => {
            let node = event.target instanceof Element ? event.target : null;
            while (node?.parentElement && node.parentElement !== document.body) node = node.parentElement;
            if (node?.parentElement === document.body) mark(node);
        };
        document.addEventListener("focusin", onFocusIn, true);
        return () => {
            observer.disconnect();
            document.removeEventListener("focusin", onFocusIn, true);
            marked.forEach((node) => node.removeAttribute("data-react-aria-top-layer"));
        };
    }, [isOpen]);
};
