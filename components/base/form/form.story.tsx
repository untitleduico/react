import { useState } from "react";
import type { FC } from "react";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";

export default {
    title: "Base components/Form",
    decorators: [
        (Story: FC) => (
            <div className="flex min-h-screen w-full items-start bg-primary p-4">
                <Story />
            </div>
        ),
    ],
};

export const Default = () => {
    const [submitted, setSubmitted] = useState<Record<string, FormDataEntryValue> | null>(null);

    return (
        <div className="flex w-full max-w-sm flex-col gap-6">
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(Object.fromEntries(new FormData(e.currentTarget)));
                }}
                className="flex flex-col gap-4"
            >
                <Input isRequired name="name" label="Name" placeholder="Olivia Rhye" />
                <Input isRequired name="email" type="email" label="Email" placeholder="olivia@untitledui.com" />
                <Button type="submit">Submit</Button>
            </Form>

            {submitted && (
                <pre className="rounded-lg bg-secondary p-3 font-mono text-xs text-tertiary">{JSON.stringify(submitted, null, 2)}</pre>
            )}
        </div>
    );
};

export const ValidationOnSubmit = () => (
    <Form
        onSubmit={(e) => e.preventDefault()}
        validationBehavior="native"
        className="flex w-full max-w-sm flex-col gap-4"
    >
        <Input isRequired name="email" type="email" label="Email" hint="Try submitting empty to see native validation." placeholder="you@company.com" />
        <Button type="submit">Continue</Button>
    </Form>
);
ValidationOnSubmit.storyName = "Validation on submit";
