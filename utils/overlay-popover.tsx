"use client";

import type { RefAttributes } from "react";
import type { PopoverProps as AriaPopoverProps } from "react-aria-components";
import { I18nProvider as AriaI18nProvider, Popover as AriaPopover, PopoverContext as AriaPopoverContext, useSlottedContext } from "react-aria-components";
import { IN_HOST_LAYER, useHostLayer, useHostLocale } from "@/utils/overlay-host";

/**
 * React Aria's `Popover`, rendered into another library's modal layer when its
 * trigger sits in one (e.g. a shadcn/ui Dialog), and following the page's
 * direction. Same props; identical to `Popover` when there is no such layer
 * and no direction mismatch. See `overlay-host.ts`.
 */
export const OverlayPopover = (props: AriaPopoverProps & RefAttributes<HTMLElement>) => {
    const context = useSlottedContext(AriaPopoverContext, props.slot);
    const triggerRef = props.triggerRef ?? context?.triggerRef;
    // Submenus render into their root popover's container; leave them there.
    const isSubmenu = (props.trigger ?? context?.trigger) === "SubmenuTrigger";
    const host = useHostLayer(isSubmenu ? null : triggerRef);
    const locale = useHostLocale(triggerRef);

    const popover = <AriaPopover {...props} {...(host && !props.UNSTABLE_portalContainer ? { UNSTABLE_portalContainer: host, [IN_HOST_LAYER]: "" } : {})} />;

    return locale ? <AriaI18nProvider locale={locale}>{popover}</AriaI18nProvider> : popover;
};
