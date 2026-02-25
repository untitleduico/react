"use client";

import { SocialButton } from "@/components/base/buttons/social-button";

export const SocialButtonGoogleDemo = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-8">
                <SocialButton social="google" theme="brand">
                    Sign in with Google
                </SocialButton>
                <SocialButton social="google" theme="brand" />
            </div>
            <div className="flex gap-8">
                <SocialButton social="google" theme="color">
                    Sign in with Google
                </SocialButton>
                <SocialButton social="google" theme="color" />
            </div>
            <div className="flex gap-8">
                <SocialButton social="google" theme="gray">
                    Sign in with Google
                </SocialButton>
                <SocialButton social="google" theme="gray" />
            </div>
        </div>
    );
};

export const SocialButtonFacebookDemo = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-8">
                <SocialButton social="facebook" theme="brand">
                    Sign in with Facebook
                </SocialButton>
                <SocialButton social="facebook" theme="brand" />
            </div>
            <div className="flex gap-8">
                <SocialButton social="facebook" theme="color">
                    Sign in with Facebook
                </SocialButton>
                <SocialButton social="facebook" theme="color" />
            </div>
            <div className="flex gap-8">
                <SocialButton social="facebook" theme="gray">
                    Sign in with Facebook
                </SocialButton>
                <SocialButton social="facebook" theme="gray" />
            </div>
        </div>
    );
};

export const SocialButtonAppleDemo = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-8">
                <SocialButton social="apple" theme="brand">
                    Sign in with Apple
                </SocialButton>
                <SocialButton social="apple" theme="brand" />
            </div>
            <div className="flex gap-8">
                <SocialButton social="apple" theme="color">
                    Sign in with Apple
                </SocialButton>
                <SocialButton social="apple" theme="color" />
            </div>
            <div className="flex gap-8">
                <SocialButton social="apple" theme="gray">
                    Sign in with Apple
                </SocialButton>
                <SocialButton social="apple" theme="gray" />
            </div>
        </div>
    );
};

export const SocialButtonTwitterDemo = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-8">
                <SocialButton social="twitter" theme="brand">
                    Sign in with X
                </SocialButton>
                <SocialButton social="twitter" theme="brand" />
            </div>
            <div className="flex gap-8">
                <SocialButton social="twitter" theme="color">
                    Sign in with X
                </SocialButton>
                <SocialButton social="twitter" theme="color" />
            </div>
            <div className="flex gap-8">
                <SocialButton social="twitter" theme="gray">
                    Sign in with X
                </SocialButton>
                <SocialButton social="twitter" theme="gray" />
            </div>
        </div>
    );
};

export const SocialButtonFigmaDemo = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-8">
                <SocialButton social="figma" theme="brand">
                    Sign in with Figma
                </SocialButton>
                <SocialButton social="figma" theme="brand" />
            </div>
            <div className="flex gap-8">
                <SocialButton social="figma" theme="color">
                    Sign in with Figma
                </SocialButton>
                <SocialButton social="figma" theme="color" />
            </div>
            <div className="flex gap-8">
                <SocialButton social="figma" theme="gray">
                    Sign in with Figma
                </SocialButton>
                <SocialButton social="figma" theme="gray" />
            </div>
        </div>
    );
};

export const SocialButtonDribbleDemo = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-8">
                <SocialButton social="dribble" theme="brand">
                    Sign in with Dribble
                </SocialButton>
                <SocialButton social="dribble" theme="brand" />
            </div>
            <div className="flex gap-8">
                <SocialButton social="dribble" theme="color">
                    Sign in with Dribble
                </SocialButton>
                <SocialButton social="dribble" theme="color" />
            </div>
            <div className="flex gap-8">
                <SocialButton social="dribble" theme="gray">
                    Sign in with Dribble
                </SocialButton>
                <SocialButton social="dribble" theme="gray" />
            </div>
        </div>
    );
};

export const SocialButtonGroupBrandDemo = () => {
    return (
        <div className="flex w-90 flex-col gap-3">
            <SocialButton social="google" theme="brand">
                Sign in with Google
            </SocialButton>
            <SocialButton social="facebook" theme="brand">
                Sign in with Facebook
            </SocialButton>
            <SocialButton social="apple" theme="brand">
                Sign in with Apple
            </SocialButton>
        </div>
    );
};

export const SocialButtonGroupIconsBrandDemo = () => {
    return (
        <div className="grid w-90 grid-cols-3 gap-3">
            <SocialButton social="google" theme="brand" />
            <SocialButton social="facebook" theme="brand" />
            <SocialButton social="apple" theme="brand" />
        </div>
    );
};

export const SocialButtonGroupColorDemo = () => {
    return (
        <div className="flex w-90 flex-col gap-3">
            <SocialButton social="google" theme="color">
                Sign in with Google
            </SocialButton>
            <SocialButton social="facebook" theme="color">
                Sign in with Facebook
            </SocialButton>
            <SocialButton social="apple" theme="color">
                Sign in with Apple
            </SocialButton>
        </div>
    );
};

export const SocialButtonGroupIconsColorDemo = () => {
    return (
        <div className="grid w-90 grid-cols-3 gap-3">
            <SocialButton social="google" theme="color" />
            <SocialButton social="facebook" theme="color" />
            <SocialButton social="apple" theme="color" />
        </div>
    );
};

export const SocialButtonGroupGrayDemo = () => {
    return (
        <div className="flex w-90 flex-col gap-3">
            <SocialButton social="google" theme="gray">
                Sign in with Google
            </SocialButton>
            <SocialButton social="facebook" theme="gray">
                Sign in with Facebook
            </SocialButton>
            <SocialButton social="apple" theme="gray">
                Sign in with Apple
            </SocialButton>
        </div>
    );
};

export const SocialButtonGroupIconsGrayDemo = () => {
    return (
        <div className="grid w-90 grid-cols-3 gap-3">
            <SocialButton social="google" theme="gray" />
            <SocialButton social="facebook" theme="gray" />
            <SocialButton social="apple" theme="gray" />
        </div>
    );
};

export const SocialButtons = () => {
    return (
        <div>
            {/* Google */}
            <div className="mb-4 flex justify-items-start gap-16">
                <div className="grid grid-cols-[238px_44px] justify-items-start gap-8">
                    <SocialButton social="google" theme="brand">
                        Sign in with Google
                    </SocialButton>
                    <SocialButton social="google" theme="brand" />
                </div>
                <div className="grid grid-cols-[238px_44px] justify-items-start gap-8">
                    <SocialButton social="google" theme="color">
                        Sign in with Google
                    </SocialButton>
                    <SocialButton social="google" theme="color" />
                </div>
                <div className="grid grid-cols-[238px_44px] justify-items-start gap-8">
                    <SocialButton social="google" theme="gray">
                        Sign in with Google
                    </SocialButton>
                    <SocialButton social="google" theme="gray" />
                </div>
            </div>

            {/* Facebook */}
            <div className="mb-4 flex justify-items-start gap-16">
                <div className="grid grid-cols-[238px_44px] justify-items-start gap-8">
                    <SocialButton social="facebook" theme="brand">
                        Sign in with Facebook
                    </SocialButton>
                    <SocialButton social="facebook" theme="brand" />
                </div>
                <div className="grid grid-cols-[238px_44px] justify-items-start gap-8">
                    <SocialButton social="facebook" theme="color">
                        Sign in with Facebook
                    </SocialButton>
                    <SocialButton social="facebook" theme="color" />
                </div>
                <div className="grid grid-cols-[238px_44px] justify-items-start gap-8">
                    <SocialButton social="facebook" theme="gray">
                        Sign in with Facebook
                    </SocialButton>
                    <SocialButton social="facebook" theme="gray" />
                </div>
            </div>

            {/* Apple */}
            <div className="mb-4 flex justify-items-start gap-16">
                <div className="grid grid-cols-[238px_44px] justify-items-start gap-8">
                    <SocialButton social="apple" theme="brand">
                        Sign in with Apple
                    </SocialButton>
                    <SocialButton social="apple" theme="brand" />
                </div>
                <div className="grid grid-cols-[238px_44px] justify-items-start gap-8">
                    <SocialButton social="apple" theme="color">
                        Sign in with Apple
                    </SocialButton>
                    <SocialButton social="apple" theme="color" />
                </div>
                <div className="grid grid-cols-[238px_44px] justify-items-start gap-8">
                    <SocialButton social="apple" theme="gray">
                        Sign in with Apple
                    </SocialButton>
                    <SocialButton social="apple" theme="gray" />
                </div>
            </div>

            {/* Twitter */}
            <div className="mb-4 flex justify-items-start gap-16">
                <div className="grid grid-cols-[238px_44px] justify-items-start gap-8">
                    <SocialButton social="twitter" theme="brand">
                        Sign in with X
                    </SocialButton>
                    <SocialButton social="twitter" theme="brand" />
                </div>
                <div className="grid grid-cols-[238px_44px] justify-items-start gap-8">
                    <SocialButton social="twitter" theme="color">
                        Sign in with X
                    </SocialButton>
                    <SocialButton social="twitter" theme="color" />
                </div>
                <div className="grid grid-cols-[238px_44px] justify-items-start gap-8">
                    <SocialButton social="twitter" theme="gray">
                        Sign in with X
                    </SocialButton>
                    <SocialButton social="twitter" theme="gray" />
                </div>
            </div>

            {/* Figma */}
            <div className="mb-4 flex justify-items-start gap-16">
                <div className="grid grid-cols-[238px_44px] justify-items-start gap-8">
                    <SocialButton social="figma" theme="brand">
                        Sign in with Figma
                    </SocialButton>
                    <SocialButton social="figma" theme="brand" />
                </div>
                <div className="grid grid-cols-[238px_44px] justify-items-start gap-8">
                    <SocialButton social="figma" theme="color">
                        Sign in with figma
                    </SocialButton>
                    <SocialButton social="figma" theme="color" />
                </div>
                <div className="grid grid-cols-[238px_44px] justify-items-start gap-8">
                    <SocialButton social="figma" theme="gray">
                        Sign in with Figma
                    </SocialButton>
                    <SocialButton social="figma" theme="gray" />
                </div>
            </div>

            {/* Dribbble */}
            <div className="mb-4 flex justify-items-start gap-16">
                <div className="grid grid-cols-[238px_44px] justify-items-start gap-8">
                    <SocialButton social="dribble" theme="brand">
                        Sign in with Dribble
                    </SocialButton>
                    <SocialButton social="dribble" theme="brand" />
                </div>
                <div className="grid grid-cols-[238px_44px] justify-items-start gap-8">
                    <SocialButton social="dribble" theme="color">
                        Sign in with Dribble
                    </SocialButton>
                    <SocialButton social="dribble" theme="color" />
                </div>
                <div className="grid grid-cols-[238px_44px] justify-items-start gap-8">
                    <SocialButton social="dribble" theme="gray">
                        Sign in with Dribble
                    </SocialButton>
                    <SocialButton social="dribble" theme="gray" />
                </div>
            </div>
        </div>
    );
};

export const SocialButtonGroupsMD = () => {
    return (
        <div>
            <div className="mb-4 flex items-start gap-8">
                <div className="flex w-90 flex-col gap-2.5">
                    <SocialButton social="google" theme="brand" size="md">
                        Sign in with Google
                    </SocialButton>
                    <SocialButton social="facebook" theme="brand" size="md">
                        Sign in with Facebook
                    </SocialButton>
                    <SocialButton social="apple" theme="brand" size="md">
                        Sign in with Apple
                    </SocialButton>
                </div>
                <div className="grid w-90 grid-cols-3 gap-3">
                    <SocialButton social="google" theme="brand" size="md" />
                    <SocialButton social="facebook" theme="brand" size="md" />
                    <SocialButton social="apple" theme="brand" size="md" />
                </div>
            </div>

            <div className="mb-4 flex items-start gap-8">
                <div className="flex w-90 flex-col gap-2.5">
                    <SocialButton social="google" theme="color" size="md">
                        Sign in with Google
                    </SocialButton>
                    <SocialButton social="facebook" theme="color" size="md">
                        Sign in with Facebook
                    </SocialButton>
                    <SocialButton social="apple" theme="color" size="md">
                        Sign in with Apple
                    </SocialButton>
                </div>
                <div className="grid w-90 grid-cols-3 gap-3">
                    <SocialButton social="google" theme="color" size="md" />
                    <SocialButton social="facebook" theme="color" size="md" />
                    <SocialButton social="apple" theme="color" size="md" />
                </div>
            </div>

            <div className="mb-4 flex items-start gap-8">
                <div className="flex w-90 flex-col gap-2.5">
                    <SocialButton social="google" theme="gray" size="md">
                        Sign in with Google
                    </SocialButton>
                    <SocialButton social="facebook" theme="gray" size="md">
                        Sign in with Facebook
                    </SocialButton>
                    <SocialButton social="apple" theme="gray" size="md">
                        Sign in with Apple
                    </SocialButton>
                </div>
                <div className="grid w-90 grid-cols-3 gap-3">
                    <SocialButton social="google" theme="gray" size="md" />
                    <SocialButton social="facebook" theme="gray" size="md" />
                    <SocialButton social="apple" theme="gray" size="md" />
                </div>
            </div>
        </div>
    );
};

export const SocialButtonGroupsLG = () => {
    return (
        <div>
            <div className="mb-4 flex items-start gap-8">
                <div className="flex w-90 flex-col gap-3">
                    <SocialButton social="google" theme="brand" size="lg">
                        Sign in with Google
                    </SocialButton>
                    <SocialButton social="facebook" theme="brand" size="lg">
                        Sign in with Facebook
                    </SocialButton>
                    <SocialButton social="apple" theme="brand" size="lg">
                        Sign in with Apple
                    </SocialButton>
                </div>
                <div className="grid w-90 grid-cols-3 gap-3">
                    <SocialButton social="google" theme="brand" size="lg" />
                    <SocialButton social="facebook" theme="brand" size="lg" />
                    <SocialButton social="apple" theme="brand" size="lg" />
                </div>
            </div>

            <div className="mb-4 flex items-start gap-8">
                <div className="flex w-90 flex-col gap-3">
                    <SocialButton social="google" theme="color" size="lg">
                        Sign in with Google
                    </SocialButton>
                    <SocialButton social="facebook" theme="color" size="lg">
                        Sign in with Facebook
                    </SocialButton>
                    <SocialButton social="apple" theme="color" size="lg">
                        Sign in with Apple
                    </SocialButton>
                </div>
                <div className="grid w-90 grid-cols-3 gap-3">
                    <SocialButton social="google" theme="color" size="lg" />
                    <SocialButton social="facebook" theme="color" size="lg" />
                    <SocialButton social="apple" theme="color" size="lg" />
                </div>
            </div>

            <div className="mb-4 flex items-start gap-8">
                <div className="flex w-90 flex-col gap-3">
                    <SocialButton social="google" theme="gray" size="lg">
                        Sign in with Google
                    </SocialButton>
                    <SocialButton social="facebook" theme="gray" size="lg">
                        Sign in with Facebook
                    </SocialButton>
                    <SocialButton social="apple" theme="gray" size="lg">
                        Sign in with Apple
                    </SocialButton>
                </div>
                <div className="grid w-90 grid-cols-3 gap-3">
                    <SocialButton social="google" theme="gray" size="lg" />
                    <SocialButton social="facebook" theme="gray" size="lg" />
                    <SocialButton social="apple" theme="gray" size="lg" />
                </div>
            </div>
        </div>
    );
};
