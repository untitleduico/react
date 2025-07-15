"use client";

import { AppGalleryButton, AppStoreButton, GalaxyStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";
import {
    AppGalleryButton as AppGalleryButtonOutline,
    AppStoreButton as AppStoreButtonOutline,
    GalaxyStoreButton as GalaxyStoreButtonOutline,
    GooglePlayButton as GooglePlayButtonOutline,
} from "@/components/base/buttons/app-store-buttons-outline";

export const AppStoreButtonDefaultDemo = () => {
    return (
        <div className="flex flex-col items-start gap-3 md:flex-row">
            <GooglePlayButton size="md" />
            <AppStoreButton size="md" />
            <GalaxyStoreButton size="md" />
        </div>
    );
};

export const AppStoreButtonGooglePlayDemo = () => {
    return (
        <div className="flex flex-col items-start gap-3 md:flex-row">
            <GooglePlayButton size="md" />
            <GooglePlayButton size="lg" />
        </div>
    );
};

export const AppStoreButtonAppStoreDemo = () => {
    return (
        <div className="flex flex-col items-start gap-3 md:flex-row">
            <AppStoreButton size="md" />
            <AppStoreButton size="lg" />
        </div>
    );
};

export const AppStoreButtonGalaxyStoreDemo = () => {
    return (
        <div className="flex flex-col items-start gap-3 md:flex-row">
            <GalaxyStoreButton size="md" />
            <GalaxyStoreButton size="lg" />
        </div>
    );
};

export const AppStoreButtonAppGalleryDemo = () => {
    return (
        <div className="flex flex-col items-start gap-3 md:flex-row">
            <AppGalleryButton size="md" />
            <AppGalleryButton size="lg" />
        </div>
    );
};

export const AppStoreButtonGooglePlayOutlineDemo = () => {
    return (
        <div className="flex flex-col items-start gap-3 md:flex-row">
            <GooglePlayButtonOutline size="md" />
            <GooglePlayButtonOutline size="lg" />
        </div>
    );
};

export const AppStoreButtonAppStoreOutlineDemo = () => {
    return (
        <div className="flex flex-col items-start gap-3 md:flex-row">
            <AppStoreButtonOutline size="md" />
            <AppStoreButtonOutline size="lg" />
        </div>
    );
};

export const AppStoreButtonGalaxyStoreOutlineDemo = () => {
    return (
        <div className="flex flex-col items-start gap-3 md:flex-row">
            <GalaxyStoreButtonOutline size="md" />
            <GalaxyStoreButtonOutline size="lg" />
        </div>
    );
};

export const AppStoreButtonAppGalleryOutlineDemo = () => {
    return (
        <div className="flex flex-col items-start gap-3 md:flex-row">
            <AppGalleryButtonOutline size="md" />
            <AppGalleryButtonOutline size="lg" />
        </div>
    );
};

export const Md = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-start gap-8">
                <GooglePlayButton size="md" />
                <AppStoreButton size="md" />
                <GalaxyStoreButton size="md" />
                <AppGalleryButton size="md" />
            </div>
            <div className="flex items-start gap-8">
                <GooglePlayButtonOutline size="md" />
                <AppStoreButtonOutline size="md" />
                <GalaxyStoreButtonOutline size="md" />
                <AppGalleryButtonOutline size="md" />
            </div>
        </div>
    );
};

export const Lg = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-start gap-8">
                <GooglePlayButton size="lg" />
                <AppStoreButton size="lg" />
                <GalaxyStoreButton size="lg" />
                <AppGalleryButton size="lg" />
            </div>
            <div className="flex items-start gap-8">
                <GooglePlayButtonOutline size="lg" />
                <AppStoreButtonOutline size="lg" />
                <GalaxyStoreButtonOutline size="lg" />
                <AppGalleryButtonOutline size="lg" />
            </div>
        </div>
    );
};
