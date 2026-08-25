import type { FC } from "react";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { SlideoutMenu } from "@/components/application/slideout-menus/slideout-menu";

export default {
    title: "Application/Slideout menu",
    decorators: [
        (Story: FC) => (
            <div className="flex min-h-screen w-full items-start bg-primary p-4">
                <Story />
            </div>
        ),
    ],
};

export const Default = () => (
    <SlideoutMenu.Trigger>
        <Button color="secondary">Open slideout</Button>
        <SlideoutMenu>
            {({ close }) => (
                <>
                    <SlideoutMenu.Header onClose={close}>
                        <h2 className="text-lg font-semibold text-primary">Panel title</h2>
                        <p className="text-sm text-tertiary">A right-hand slideout built from the SlideoutMenu primitive.</p>
                    </SlideoutMenu.Header>
                    <SlideoutMenu.Content>
                        <Input name="name" label="Name" placeholder="Olivia Rhye" />
                        <Input name="email" type="email" label="Email" placeholder="olivia@untitledui.com" />
                    </SlideoutMenu.Content>
                    <SlideoutMenu.Footer>
                        <div className="flex justify-end gap-3">
                            <Button color="secondary" onClick={close}>
                                Cancel
                            </Button>
                            <Button onClick={close}>Save</Button>
                        </div>
                    </SlideoutMenu.Footer>
                </>
            )}
        </SlideoutMenu>
    </SlideoutMenu.Trigger>
);
