import type { FC } from "react";
import { Trash01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Dialog, DialogTrigger, Modal, ModalOverlay } from "@/components/application/modals/modal";

export default {
    title: "Application/Modal",
    decorators: [
        (Story: FC) => (
            <div className="flex min-h-screen w-full items-start bg-primary p-4">
                <Story />
            </div>
        ),
    ],
};

export const Default = () => (
    <DialogTrigger>
        <Button color="secondary">Open modal</Button>
        <ModalOverlay>
            <Modal className="max-w-100">
                <Dialog>
                    {({ close }) => (
                        <div className="flex flex-col gap-5 p-6">
                            <div className="flex flex-col gap-1">
                                <h2 className="text-lg font-semibold text-primary">Modal title</h2>
                                <p className="text-sm text-tertiary">This is a basic modal built from the ModalOverlay / Modal / Dialog primitives.</p>
                            </div>
                            <div className="flex justify-end gap-3">
                                <Button color="secondary" onClick={close}>
                                    Cancel
                                </Button>
                                <Button onClick={close}>Confirm</Button>
                            </div>
                        </div>
                    )}
                </Dialog>
            </Modal>
        </ModalOverlay>
    </DialogTrigger>
);

export const Destructive = () => (
    <DialogTrigger>
        <Button color="primary-destructive">Delete item</Button>
        <ModalOverlay isDismissable>
            <Modal className="max-w-100">
                <Dialog>
                    {({ close }) => (
                        <div className="flex flex-col gap-5 p-6">
                            <FeaturedIcon icon={Trash01} color="error" theme="light" size="lg" />
                            <div className="flex flex-col gap-1">
                                <h2 className="text-lg font-semibold text-primary">Delete this item?</h2>
                                <p className="text-sm text-tertiary">This action cannot be undone. This will permanently remove the item.</p>
                            </div>
                            <div className="flex justify-end gap-3">
                                <Button color="secondary" onClick={close}>
                                    Cancel
                                </Button>
                                <Button color="primary-destructive" onClick={close}>
                                    Delete
                                </Button>
                            </div>
                        </div>
                    )}
                </Dialog>
            </Modal>
        </ModalOverlay>
    </DialogTrigger>
);
