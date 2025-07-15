"use client";

import { TextArea } from "@/components/base/textarea/textarea";

export const DefaultDemo = () => {
    return <TextArea isRequired placeholder="This is a placeholder." label="Description" hint="This is a hint text to help user." rows={5} />;
};

export const DisabledDemo = () => {
    return <TextArea isRequired isDisabled placeholder="This is a placeholder." label="Description" hint="This is a hint text to help user." rows={5} />;
};

export const InvalidDemo = () => {
    return <TextArea isRequired isInvalid placeholder="This is a placeholder." label="Description" hint="This is an error message." rows={5} />;
};

export const Textarea = () => {
    return (
        <div className="flex w-full max-w-md flex-col gap-4">
            <TextArea isRequired placeholder="This is a placeholder." label="Description" hint="This is a hint text to help user." rows={5} />
            <TextArea isRequired isDisabled placeholder="This is a placeholder." label="Description" hint="This is a hint text to help user." rows={5} />
            <TextArea isRequired isInvalid placeholder="This is a placeholder." label="Description" hint="This is an error message." rows={5} />
        </div>
    );
};
