"use client";

import type { ComponentPropsWithRef } from "react";
import { createContext, useContext, useId } from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { cx } from "@/utils/cx";

type PinInputContextType = {
    size: "sm" | "md" | "lg";
    disabled: boolean;
    id: string;
};

const PinInputContext = createContext<PinInputContextType>({
    size: "sm",
    id: "",
    disabled: false,
});

export const usePinInputContext = () => {
    const context = useContext(PinInputContext);

    if (!context) {
        throw new Error("The 'usePinInputContext' hook must be used within a '<PinInput />'");
    }

    return context;
};

interface RootProps extends ComponentPropsWithRef<"div"> {
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
}

const Root = ({ className, size = "md", disabled = false, ...props }: RootProps) => {
    const id = useId();

    return (
        <PinInputContext.Provider value={{ size, disabled, id }}>
            <div role="group" className={cx("flex h-max flex-col gap-1.5", className)} {...props} />
        </PinInputContext.Provider>
    );
};
Root.displayName = "Root";

type GroupProps = ComponentPropsWithRef<typeof OTPInput> & {
    width?: number;
    inputClassName?: string;
};

const Group = ({ inputClassName, containerClassName, width, maxLength = 4, ...props }: GroupProps) => {
    const { id, size, disabled } = usePinInputContext();

    const heights = {
        sm: "h-16.5",
        md: "h-20.5",
        lg: "h-24.5",
    };

    return (
        <OTPInput
            {...props}
            size={width}
            maxLength={maxLength}
            disabled={disabled}
            id={"pin-input-" + id}
            aria-label="Enter your pin"
            aria-labelledby={"pin-input-label-" + id}
            aria-describedby={"pin-input-description-" + id}
            containerClassName={cx("flex flex-row gap-3", size === "sm" && "gap-2", heights[size], containerClassName)}
            className={cx("w-full! disabled:cursor-not-allowed", inputClassName)}
        />
    );
};
Group.displayName = "Group";

const sizes = {
    sm: "size-16 px-2 py-0.5 text-display-lg font-medium",
    md: "size-20 px-2 py-2.5 text-display-lg font-medium",
    lg: "size-24 px-2 py-3 text-display-xl font-medium",
};

const Slot = ({ index, className, ...props }: ComponentPropsWithRef<"div"> & { index: number }) => {
    const { size, disabled } = usePinInputContext();
    const { slots, isFocused } = useContext(OTPInputContext);
    const slot = slots[index];

    return (
        <div
            {...props}
            aria-label={"Enter digit " + (index + 1) + " of " + slots.length}
            className={cx(
                "relative flex items-center justify-center rounded-xl bg-primary text-center text-placeholder_subtle shadow-xs ring-1 ring-primary transition-[box-shadow,background-color] duration-100 ease-linear ring-inset",
                sizes[size],
                isFocused && slot?.isActive && "ring-2 ring-brand outline-2 outline-offset-2 outline-brand",
                slot?.char && "text-brand-tertiary_alt ring-2 ring-brand",
                disabled && "bg-disabled_subtle text-fg-disabled_subtle ring-disabled",
                className,
            )}
        >
            {slot?.char ? slot.char : slot?.hasFakeCaret ? <FakeCaret size={size} /> : 0}
        </div>
    );
};
Slot.displayName = "Slot";

const FakeCaret = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
    return (
        <div
            className={cx(
                "pointer-events-none h-[1em] w-0.5 animate-caret-blink bg-fg-brand-primary",
                size === "lg" ? "text-display-xl font-medium" : "text-display-lg font-medium",
            )}
        />
    );
};

const Separator = (props: ComponentPropsWithRef<"p">) => {
    return (
        <div role="separator" {...props} className={cx("text-center text-display-xl font-medium text-placeholder_subtle", props.className)}>
            -
        </div>
    );
};
Separator.displayName = "Separator";

const Label = ({ className, ...props }: ComponentPropsWithRef<"label">) => {
    const { id } = usePinInputContext();

    return <label {...props} htmlFor={"pin-input-" + id} id={"pin-input-label-" + id} className={cx("text-sm font-medium text-secondary", className)} />;
};
Label.displayName = "Label";

const Description = ({ className, ...props }: ComponentPropsWithRef<"p">) => {
    const { id } = usePinInputContext();

    return <p {...props} id={"pin-input-description-" + id} role="description" className={cx("text-sm text-tertiary", className)} />;
};
Description.displayName = "Description";

const PinInput = Root as typeof Root & {
    Slot: typeof Slot;
    Label: typeof Label;
    Group: typeof Group;
    Separator: typeof Separator;
    Description: typeof Description;
};
PinInput.Slot = Slot;
PinInput.Label = Label;
PinInput.Group = Group;
PinInput.Separator = Separator;
PinInput.Description = Description;

export { PinInput };
