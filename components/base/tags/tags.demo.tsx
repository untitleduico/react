"use client";

import { useState } from "react";
import type { Selection } from "react-aria-components";
import { Tag, TagGroup, type TagItem, TagList } from "@/components/base/tags/tags";

export const DefaultDemo = () => {
    return (
        <TagGroup label="Tags" size="md">
            <TagList className="flex gap-4">
                <Tag>Label</Tag>
                <Tag avatarSrc="https://www.untitledui.com/images/flags/AU.svg">Label</Tag>
                <Tag avatarSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80">Label</Tag>
                <Tag dot={true}>Label</Tag>
            </TagList>
        </TagGroup>
    );
};

export const CloseXDemo = () => {
    const [tags, setTags] = useState<TagItem[]>([
        { id: "tag-01", label: "Label" },
        { id: "tag-02", label: "Label", avatarSrc: "https://www.untitledui.com/images/flags/AU.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", avatarSrc: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
        { id: "tag-04", label: "Label", dot: true },
    ]);

    return (
        <TagGroup
            label="Tags"
            size="md"
            onRemove={(keys) => {
                setTags(tags.filter((tag) => !keys.has(tag.id)));
            }}
        >
            <TagList className="flex flex-col items-start gap-4 md:flex-row" items={tags}>
                {(item) => <Tag {...item}>{item.label}</Tag>}
            </TagList>
        </TagGroup>
    );
};

export const CountDemo = () => {
    return (
        <TagGroup label="Tags" size="md">
            <TagList className="flex flex-col items-start gap-4 md:flex-row">
                <Tag count={5}>Label</Tag>
                <Tag avatarSrc="https://www.untitledui.com/images/flags/AU.svg" count={5}>
                    Label
                </Tag>
                <Tag avatarSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" count={5}>
                    Label
                </Tag>
                <Tag dot={true} count={5}>
                    Label
                </Tag>
            </TagList>
        </TagGroup>
    );
};

export const CheckboxDemo = () => {
    const [selectedTags, setSelectedTags] = useState<Selection>(new Set(["tag-01", "tag-02"]));

    return (
        <TagGroup label="Tags" size="md" selectionMode="multiple" selectedKeys={selectedTags} onSelectionChange={setSelectedTags}>
            <TagList className="flex flex-col items-start gap-4 md:flex-row">
                <Tag id="tag-01">Label</Tag>
                <Tag id="tag-02" avatarSrc="https://www.untitledui.com/images/flags/AU.svg">
                    Label
                </Tag>
                <Tag id="tag-03" avatarSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80">
                    Label
                </Tag>
                <Tag id="tag-04" dot={true}>
                    Label
                </Tag>
            </TagList>
        </TagGroup>
    );
};

export const CheckboxCloseXDemo = () => {
    const [selectedTags, setSelectedTags] = useState<Selection>(new Set(["tag-01", "tag-02"]));
    const [tags, setTags] = useState<TagItem[]>([
        { id: "tag-01", label: "Label" },
        { id: "tag-02", label: "Label", avatarSrc: "https://www.untitledui.com/images/flags/AU.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", avatarSrc: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
        { id: "tag-04", label: "Label", dot: true },
    ]);

    return (
        <TagGroup
            label="Tags"
            size="md"
            selectionMode="multiple"
            selectedKeys={selectedTags}
            onSelectionChange={setSelectedTags}
            onRemove={(keys) => {
                setTags(tags.filter((tag) => !keys.has(tag.id)));
            }}
        >
            <TagList className="flex flex-col items-start gap-4 md:flex-row" items={tags}>
                {(item) => <Tag {...item}>{item.label}</Tag>}
            </TagList>
        </TagGroup>
    );
};

export const CheckboxCountDemo = () => {
    const [selectedTags, setSelectedTags] = useState<Selection>(new Set(["tag-01", "tag-02"]));

    return (
        <TagGroup label="Tags" size="md" selectionMode="multiple" selectedKeys={selectedTags} onSelectionChange={setSelectedTags}>
            <TagList className="flex flex-col items-start gap-4 md:flex-row">
                <Tag id="tag-01" count={5}>
                    Label
                </Tag>
                <Tag id="tag-02" avatarSrc="https://www.untitledui.com/images/flags/AU.svg" count={5}>
                    Label
                </Tag>
                <Tag id="tag-03" avatarSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" count={5}>
                    Label
                </Tag>
                <Tag id="tag-04" dot={true} count={5}>
                    Label
                </Tag>
            </TagList>
        </TagGroup>
    );
};

export const SizesDemo = () => {
    return (
        <div className="flex flex-col gap-4">
            {/* Small */}
            <TagGroup label="Tags" size="sm">
                <TagList className="flex gap-4">
                    <Tag>Label</Tag>
                    <Tag avatarSrc="https://www.untitledui.com/images/flags/AU.svg">Label</Tag>
                    <Tag avatarSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80">Label</Tag>
                    <Tag dot={true}>Label</Tag>
                </TagList>
            </TagGroup>

            {/* Medium */}
            <TagGroup label="Tags" size="md">
                <TagList className="flex gap-4">
                    <Tag>Label</Tag>
                    <Tag avatarSrc="https://www.untitledui.com/images/flags/AU.svg">Label</Tag>
                    <Tag avatarSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80">Label</Tag>
                    <Tag dot={true}>Label</Tag>
                </TagList>
            </TagGroup>

            {/* Large */}
            <TagGroup label="Tags" size="lg">
                <TagList className="flex gap-4">
                    <Tag>Label</Tag>
                    <Tag avatarSrc="https://www.untitledui.com/images/flags/AU.svg">Label</Tag>
                    <Tag avatarSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80">Label</Tag>
                    <Tag dot={true}>Label</Tag>
                </TagList>
            </TagGroup>
        </div>
    );
};

export const Default = () => {
    const tags: TagItem[] = [
        { id: "tag-01", label: "Label" },
        { id: "tag-02", label: "Label", avatarSrc: "https://www.untitledui.com/images/flags/AU.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", avatarSrc: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
        { id: "tag-04", label: "Label", dot: true },
    ];

    return (
        <div className="flex flex-col gap-4">
            <TagGroup label="Tags" size="sm">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" size="md">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" size="lg">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
        </div>
    );
};

export const CloseX = () => {
    const tags: TagItem[] = [
        { id: "tag-01", label: "Label", onClose: () => {} },
        { id: "tag-02", label: "Label", onClose: () => {}, avatarSrc: "https://www.untitledui.com/images/flags/AU.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", onClose: () => {}, avatarSrc: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
        { id: "tag-04", label: "Label", onClose: () => {}, dot: true },
    ];

    return (
        <div className="flex flex-col gap-4">
            <TagGroup label="Tags" size="sm">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" size="md">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" size="lg">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
        </div>
    );
};

export const Count = () => {
    const tags: TagItem[] = [
        { id: "tag-01", label: "Label", count: 5 },
        { id: "tag-02", label: "Label", count: 5, avatarSrc: "https://www.untitledui.com/images/flags/AU.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", count: 5, avatarSrc: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
        { id: "tag-04", label: "Label", count: 5, dot: true },
    ];

    return (
        <div className="flex flex-col gap-4">
            <TagGroup label="Tags" size="sm">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" size="md">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" size="lg">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
        </div>
    );
};

export const CheckboxDefault = () => {
    const tags: TagItem[] = [
        { id: "tag-01", label: "Label" },
        { id: "tag-02", label: "Label", avatarSrc: "https://www.untitledui.com/images/flags/AU.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", avatarSrc: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
        { id: "tag-04", label: "Label", dot: true },
    ];

    return (
        <div className="flex flex-col gap-4">
            <TagGroup label="Tags" selectionMode="multiple" size="sm">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" selectionMode="multiple" size="md">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" selectionMode="multiple" size="lg">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
        </div>
    );
};

export const CheckboxCloseX = () => {
    const tags: TagItem[] = [
        { id: "tag-01", label: "Label", onClose: () => {} },
        { id: "tag-02", label: "Label", onClose: () => {}, avatarSrc: "https://www.untitledui.com/images/flags/AU.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", onClose: () => {}, avatarSrc: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
        { id: "tag-04", label: "Label", onClose: () => {}, dot: true },
    ];

    return (
        <div className="flex flex-col gap-4">
            <TagGroup label="Tags" selectionMode="multiple" size="sm">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" selectionMode="multiple" size="md">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" selectionMode="multiple" size="lg">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
        </div>
    );
};

export const CheckboxCount = () => {
    const tags: TagItem[] = [
        { id: "tag-01", label: "Label", count: 5 },
        { id: "tag-02", label: "Label", count: 5, avatarSrc: "https://www.untitledui.com/images/flags/AU.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", count: 5, avatarSrc: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
        { id: "tag-04", label: "Label", count: 5, dot: true },
    ];

    return (
        <div className="flex flex-col gap-4">
            <TagGroup label="Tags" selectionMode="multiple" size="sm">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" selectionMode="multiple" size="md">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" selectionMode="multiple" size="lg">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
        </div>
    );
};
