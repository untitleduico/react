// Regression test for https://github.com/untitleduico/react/issues/187
//
// Select and DatePicker should forward the `isInvalid` prop to the visible
// trigger button ring color, matching the convention used by Input.
import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import { DatePicker } from "@/components/application/date-picker/date-picker";
import { Select } from "@/components/base/select/select";

afterEach(() => {
    cleanup();
});

// react-aria-components <Select> also renders a hidden native <select>
// for form submission, so we scope to the pressable trigger button.
const getPressableTrigger = () => {
    const triggers = document.querySelectorAll('button[data-react-aria-pressable="true"]');
    if (triggers.length === 0) {
        throw new Error("No pressable trigger button found in rendered output");
    }
    return triggers[0] as HTMLButtonElement;
};

describe("Select trigger ring color when isInvalid", () => {
    test("does not apply error ring when isInvalid is omitted", () => {
        render(
            <Select aria-label="Area" placeholder="Pick" items={[{ id: "1", label: "One" }]}>
                {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
            </Select>,
        );
        const trigger = getPressableTrigger();
        expect(trigger.className).not.toMatch(/ring-error_subtle/);
        expect(trigger.className).not.toMatch(/\bring-error\b/);
    });

    test("applies error ring token when isInvalid is true", () => {
        render(
            <Select aria-label="Area" isInvalid placeholder="Pick" items={[{ id: "1", label: "One" }]}>
                {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
            </Select>,
        );
        const trigger = getPressableTrigger();
        expect(trigger.className).toMatch(/ring-error_subtle/);
    });

    test("does not apply brand ring color when invalid", () => {
        render(
            <Select aria-label="Area" isInvalid placeholder="Pick" items={[{ id: "1", label: "One" }]}>
                {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
            </Select>,
        );
        const trigger = getPressableTrigger();
        // When invalid, the trigger must not show the neutral brand ring.
        expect(trigger.className).not.toMatch(/\bring-brand\b/);
    });
});

describe("DatePicker trigger ring color when isInvalid", () => {
    test("applies error ring token when isInvalid is true", () => {
        render(<DatePicker aria-label="Arrive" isInvalid />);
        const trigger = getPressableTrigger();
        expect(trigger.className).toMatch(/ring-error_subtle/);
    });

    test("uses default (non-error) ring token when isInvalid is omitted", () => {
        render(<DatePicker aria-label="Arrive" />);
        const trigger = getPressableTrigger();
        expect(trigger.className).not.toMatch(/ring-error_subtle/);
    });
});
