"use client";

import { User01 } from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";
import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { AvatarProfilePhoto } from "@/components/base/avatar/avatar-profile-photo";
import { AvatarAddButton, AvatarCompanyIcon } from "@/components/base/avatar/base-components";

export const DefaultDemo = () => {
    return (
        <AvatarLabelGroup
            size="md"
            src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
            alt="Olivia Rhye"
            title="Olivia Rhye"
            subtitle="olivia@untitledui.com"
        />
    );
};

export const BaseDemo = () => {
    return <Avatar size="md" src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" alt="Olivia Rhye" />;
};

export const StatusIndicatorDemo = () => {
    return (
        <div className="flex gap-8">
            <Avatar status="online" size="md" src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" alt="Olivia Rhye" />
            <Avatar status="offline" size="md" src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" alt="Olivia Rhye" />
        </div>
    );
};

export const CompanyLogoDemo = () => {
    return (
        <Avatar
            size="md"
            src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
            alt="Olivia Rhye"
            badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="md" />}
        />
    );
};

export const VerifiedDemo = () => {
    return <Avatar verified size="md" src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" alt="Olivia Rhye" />;
};

export const PlaceholderDemo = () => {
    return <Avatar size="md" alt="Olivia Rhye" placeholderIcon={User01} />;
};

export const InitialsDemo = () => {
    return <Avatar size="md" alt="Olivia Rhye" initials="OR" />;
};

export const LabelGroupDemo = () => {
    return (
        <AvatarLabelGroup
            size="md"
            src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
            alt="Olivia Rhye"
            title="Olivia Rhye"
            subtitle="olivia@untitledui.com"
        />
    );
};

export const GroupDemo = () => {
    return (
        <div className="flex gap-2">
            <div className="flex -space-x-2">
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    alt="Olivia Rhye"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80"
                    alt="Phoenix Baker"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80"
                    alt="Lana Steiner"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80"
                    alt="Demi Wilkinson"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80"
                    alt="Candice Wu"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/natali-craig?fm=webp&q=80"
                    alt="Natali Craig"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/drew-cano?fm=webp&q=80"
                    alt="Drew Cano"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/orlando-diggs?fm=webp&q=80"
                    alt="Orlando Diggs"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/andi-lane?fm=webp&q=80"
                    alt="Andi Lane"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/kate-morrison?fm=webp&q=80"
                    alt="Kate Morrison"
                />
                <Avatar
                    size="sm"
                    className="ring-[1.5px] ring-bg-primary"
                    placeholder={<span className="flex items-center justify-center text-sm font-semibold text-quaternary">+5</span>}
                />
            </div>
            <AvatarAddButton size="sm" />
        </div>
    );
};

export const ProfilePhotoDemo = () => {
    return (
        <div className="flex gap-8">
            <AvatarProfilePhoto verified size="md" src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" alt="Olivia Rhye" />
            <AvatarProfilePhoto verified size="md" alt="Olivia Rhye" placeholderIcon={User01} />
            <AvatarProfilePhoto verified size="md" alt="Olivia Rhye" initials="OR" />
        </div>
    );
};

export const Group = () => (
    <div className="flex flex-col gap-4">
        <div className="flex gap-2">
            <div className="flex -space-x-1">
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="xs"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    alt="Olivia Rhye"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="xs"
                    src="https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80"
                    alt="Phoenix Baker"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="xs"
                    src="https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80"
                    alt="Lana Steiner"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="xs"
                    src="https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80"
                    alt="Demi Wilkinson"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="xs"
                    src="https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80"
                    alt="Candice Wu"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="xs"
                    src="https://www.untitledui.com/images/avatars/natali-craig?fm=webp&q=80"
                    alt="Natali Craig"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="xs"
                    src="https://www.untitledui.com/images/avatars/drew-cano?fm=webp&q=80"
                    alt="Drew Cano"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="xs"
                    src="https://www.untitledui.com/images/avatars/orlando-diggs?fm=webp&q=80"
                    alt="Orlando Diggs"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="xs"
                    src="https://www.untitledui.com/images/avatars/andi-lane?fm=webp&q=80"
                    alt="Andi Lane"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="xs"
                    src="https://www.untitledui.com/images/avatars/kate-morrison?fm=webp&q=80"
                    alt="Kate Morrison"
                />
                <Avatar
                    size="xs"
                    className="ring-[1.5px] ring-bg-primary"
                    placeholder={<span className="flex items-center justify-center text-xs font-semibold text-quaternary">+5</span>}
                />
            </div>
            <AvatarAddButton size="xs" />
        </div>
        <div className="flex gap-2">
            <div className="flex -space-x-2">
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    alt="Olivia Rhye"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80"
                    alt="Phoenix Baker"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80"
                    alt="Lana Steiner"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80"
                    alt="Demi Wilkinson"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80"
                    alt="Candice Wu"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/natali-craig?fm=webp&q=80"
                    alt="Natali Craig"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/drew-cano?fm=webp&q=80"
                    alt="Drew Cano"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/orlando-diggs?fm=webp&q=80"
                    alt="Orlando Diggs"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/andi-lane?fm=webp&q=80"
                    alt="Andi Lane"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/kate-morrison?fm=webp&q=80"
                    alt="Kate Morrison"
                />
                <Avatar
                    size="sm"
                    className="ring-[1.5px] ring-bg-primary"
                    placeholder={<span className="flex items-center justify-center text-sm font-semibold text-quaternary">+5</span>}
                />
            </div>
            <AvatarAddButton size="sm" />
        </div>
        <div className="flex gap-2">
            <div className="flex -space-x-3">
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="md"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    alt="Olivia Rhye"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="md"
                    src="https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80"
                    alt="Phoenix Baker"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="md"
                    src="https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80"
                    alt="Lana Steiner"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="md"
                    src="https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80"
                    alt="Demi Wilkinson"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="md"
                    src="https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80"
                    alt="Candice Wu"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="md"
                    src="https://www.untitledui.com/images/avatars/natali-craig?fm=webp&q=80"
                    alt="Natali Craig"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="md"
                    src="https://www.untitledui.com/images/avatars/drew-cano?fm=webp&q=80"
                    alt="Drew Cano"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="md"
                    src="https://www.untitledui.com/images/avatars/orlando-diggs?fm=webp&q=80"
                    alt="Orlando Diggs"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="md"
                    src="https://www.untitledui.com/images/avatars/andi-lane?fm=webp&q=80"
                    alt="Andi Lane"
                />
                <Avatar
                    className="ring-[1.5px] ring-bg-primary"
                    size="md"
                    src="https://www.untitledui.com/images/avatars/kate-morrison?fm=webp&q=80"
                    alt="Kate Morrison"
                />
                <Avatar
                    size="md"
                    className="ring-[1.5px] ring-bg-primary"
                    placeholder={<span className="flex items-center justify-center text-md font-semibold text-quaternary">+5</span>}
                />
            </div>
            <AvatarAddButton size="md" />
        </div>
    </div>
);

export const Default = () => (
    <div className="flex flex-col gap-4">
        <div className="flex items-start gap-8">
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar
                    size="xs"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    alt="Olivia Rhye"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    alt="Olivia Rhye"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar
                    size="md"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    alt="Olivia Rhye"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar
                    size="lg"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    alt="Olivia Rhye"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar
                    size="xl"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    alt="Olivia Rhye"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                />
            </a>
            <a href="#" className="group inline-flex focus:outline-hidden">
                <Avatar
                    size="2xl"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    alt="Olivia Rhye"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                />
            </a>
        </div>

        <div className="flex items-start gap-8">
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="xs"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                    alt="Olivia Rhye"
                    status="online"
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                    alt="Olivia Rhye"
                    status="online"
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="md"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                    alt="Olivia Rhye"
                    status="online"
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="lg"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                    alt="Olivia Rhye"
                    status="online"
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="xl"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                    alt="Olivia Rhye"
                    status="online"
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="2xl"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                    alt="Olivia Rhye"
                    status="online"
                />
            </a>
        </div>

        <div className="flex items-start gap-8">
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="xs"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                    alt="Olivia Rhye"
                    badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="xs" />}
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                    alt="Olivia Rhye"
                    badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="sm" />}
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="md"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                    alt="Olivia Rhye"
                    badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="md" />}
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="lg"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                    alt="Olivia Rhye"
                    badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="lg" />}
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="xl"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                    alt="Olivia Rhye"
                    badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="xl" />}
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="2xl"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                    alt="Olivia Rhye"
                    badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="2xl" />}
                />
            </a>
        </div>

        <div className="flex items-start gap-8">
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="xs"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                    alt="Olivia Rhye"
                    verified
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="sm"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                    alt="Olivia Rhye"
                    verified
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="md"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                    alt="Olivia Rhye"
                    verified
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="lg"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                    alt="Olivia Rhye"
                    verified
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="xl"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                    alt="Olivia Rhye"
                    verified
                />
            </a>
            <a href="#" className="group relative inline-flex focus:outline-hidden">
                <Avatar
                    size="2xl"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    className="ring-focus-ring ring-offset-bg-primary group-focus:ring-2 group-focus:ring-offset-2"
                    alt="Olivia Rhye"
                    verified
                />
            </a>
        </div>
    </div>
);

export const Placeholder = () => (
    <div className="flex flex-col gap-4">
        <div className="flex items-start gap-8">
            <Avatar size="xs" placeholderIcon={User01} />
            <Avatar size="sm" placeholderIcon={User01} />
            <Avatar size="md" placeholderIcon={User01} />
            <Avatar size="lg" placeholderIcon={User01} />
            <Avatar size="xl" placeholderIcon={User01} />
            <Avatar size="2xl" placeholderIcon={User01} />
        </div>

        <div className="flex items-start gap-8">
            <Avatar size="xs" status="online" placeholderIcon={User01} />
            <Avatar size="sm" status="online" placeholderIcon={User01} />
            <Avatar size="md" status="online" placeholderIcon={User01} />
            <Avatar size="lg" status="online" placeholderIcon={User01} />
            <Avatar size="xl" status="online" placeholderIcon={User01} />
            <Avatar size="2xl" status="online" placeholderIcon={User01} />
        </div>

        <div className="flex items-start gap-8">
            <Avatar
                size="xs"
                badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="xs" />}
                placeholderIcon={User01}
            />
            <Avatar
                size="sm"
                badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="sm" />}
                placeholderIcon={User01}
            />
            <Avatar
                size="md"
                badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="md" />}
                placeholderIcon={User01}
            />
            <Avatar
                size="lg"
                badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="lg" />}
                placeholderIcon={User01}
            />
            <Avatar
                size="xl"
                badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="xl" />}
                placeholderIcon={User01}
            />
            <Avatar
                size="2xl"
                badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="2xl" />}
                placeholderIcon={User01}
            />
        </div>
    </div>
);

export const Initials = () => (
    <div className="flex flex-col gap-4">
        <div className="flex items-start gap-8">
            <Avatar size="xs" initials="OR" />
            <Avatar size="sm" initials="OR" />
            <Avatar size="md" initials="OR" />
            <Avatar size="lg" initials="OR" />
            <Avatar size="xl" initials="OR" />
            <Avatar size="2xl" initials="OR" />
        </div>

        <div className="flex items-start gap-8">
            <Avatar size="xs" status="online" initials="OR" />
            <Avatar size="sm" status="online" initials="OR" />
            <Avatar size="md" status="online" initials="OR" />
            <Avatar size="lg" status="online" initials="OR" />
            <Avatar size="xl" status="online" initials="OR" />
            <Avatar size="2xl" status="online" initials="OR" />
        </div>

        <div className="flex items-start gap-8">
            <Avatar
                size="xs"
                badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="xs" />}
                initials="OR"
            />
            <Avatar
                size="sm"
                badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="sm" />}
                initials="OR"
            />
            <Avatar
                size="md"
                badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="md" />}
                initials="OR"
            />
            <Avatar
                size="lg"
                badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="lg" />}
                initials="OR"
            />
            <Avatar
                size="xl"
                badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="xl" />}
                initials="OR"
            />
            <Avatar
                size="2xl"
                badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="2xl" />}
                initials="OR"
            />
        </div>
    </div>
);

export const LabelGroup = () => (
    <div className="flex flex-col gap-4">
        <div className="flex items-start gap-8">
            <AvatarLabelGroup
                size="sm"
                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@untitledui.com"
            />
            <AvatarLabelGroup
                size="md"
                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@untitledui.com"
            />
            <AvatarLabelGroup
                size="lg"
                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@untitledui.com"
            />
            <AvatarLabelGroup
                size="xl"
                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@untitledui.com"
            />
        </div>

        <div className="flex items-start gap-8">
            <AvatarLabelGroup
                size="sm"
                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@untitledui.com"
                status="online"
            />
            <AvatarLabelGroup
                size="md"
                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@untitledui.com"
                status="online"
            />
            <AvatarLabelGroup
                size="lg"
                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@untitledui.com"
                status="online"
            />
            <AvatarLabelGroup
                size="xl"
                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@untitledui.com"
                status="online"
            />
        </div>

        <div className="flex items-start gap-8">
            <AvatarLabelGroup
                size="sm"
                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@untitledui.com"
                badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="sm" />}
            />
            <AvatarLabelGroup
                size="md"
                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@untitledui.com"
                badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="md" />}
            />
            <AvatarLabelGroup
                size="lg"
                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@untitledui.com"
                badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="lg" />}
            />
            <AvatarLabelGroup
                size="xl"
                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@untitledui.com"
                badge={<AvatarCompanyIcon src="https://www.untitledui.com/logos/images/Layers.jpg" alt="Layers Inc." size="xl" />}
            />
        </div>

        <div className="flex items-start gap-8">
            <AvatarLabelGroup
                size="sm"
                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@untitledui.com"
                verified
            />
            <AvatarLabelGroup
                size="md"
                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@untitledui.com"
                verified
            />
            <AvatarLabelGroup
                size="lg"
                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@untitledui.com"
                verified
            />
            <AvatarLabelGroup
                size="xl"
                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                alt="Olivia Rhye"
                title="Olivia Rhye"
                subtitle="olivia@untitledui.com"
                verified
            />
        </div>
    </div>
);

export const ProfilePhoto = () => (
    <div className="flex flex-col gap-16">
        <div className="flex gap-8">
            <AvatarProfilePhoto verified size="sm" src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" alt="Olivia Rhye" />
            <AvatarProfilePhoto verified size="md" src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" alt="Olivia Rhye" />
            <AvatarProfilePhoto verified size="lg" src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" alt="Olivia Rhye" />
        </div>

        <div className="flex gap-8">
            <AvatarProfilePhoto verified size="sm" placeholderIcon={User01} />
            <AvatarProfilePhoto verified size="md" placeholderIcon={User01} />
            <AvatarProfilePhoto verified size="lg" placeholderIcon={User01} />
        </div>

        <div className="flex gap-8">
            <AvatarProfilePhoto verified size="sm" initials="OR" />
            <AvatarProfilePhoto verified size="md" initials="OR" />
            <AvatarProfilePhoto verified size="lg" initials="OR" />
        </div>
    </div>
);
