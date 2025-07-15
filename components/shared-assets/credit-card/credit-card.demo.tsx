import { CreditCard } from "./credit-card";

export const CreditCardExample = () => (
    <div className="flex items-center justify-center">
        <CreditCard type="brand-dark" company="Untitled." cardNumber="1234 1234 1234 1234" cardHolder="OLIVIA RHYE" cardExpiration="06/28" />
    </div>
);

// Normal types
export const CreditCardTransparent = () => (
    <div className="flex items-center justify-center">
        <CreditCard type="transparent" />
    </div>
);

export const CreditCardTransparentGradient = () => (
    <div className="flex items-center justify-center">
        <CreditCard type="transparent-gradient" />
    </div>
);

export const CreditCardBrandDark = () => (
    <div className="flex items-center justify-center">
        <CreditCard type="brand-dark" />
    </div>
);

export const CreditCardBrandLight = () => (
    <div className="flex items-center justify-center">
        <CreditCard type="brand-light" />
    </div>
);

export const CreditCardGrayDark = () => (
    <div className="flex items-center justify-center">
        <CreditCard type="gray-dark" />
    </div>
);

export const CreditCardGrayLight = () => (
    <div className="flex items-center justify-center">
        <CreditCard type="gray-light" />
    </div>
);

// Strip types
export const CreditCardTransparentStrip = () => (
    <div className="flex items-center justify-center">
        <CreditCard type="transparent-strip" />
    </div>
);

export const CreditCardGrayStrip = () => (
    <div className="flex items-center justify-center">
        <CreditCard type="gray-strip" />
    </div>
);

export const CreditCardGradientStrip = () => (
    <div className="flex items-center justify-center">
        <CreditCard type="gradient-strip" />
    </div>
);

export const CreditCardSalmonStrip = () => (
    <div className="flex items-center justify-center">
        <CreditCard type="salmon-strip" />
    </div>
);

// Vertical strip types
export const CreditCardGrayStripVertical = () => (
    <div className="flex items-center justify-center">
        <CreditCard type="gray-strip-vertical" />
    </div>
);

export const CreditCardGradientStripVertical = () => (
    <div className="flex items-center justify-center">
        <CreditCard type="gradient-strip-vertical" />
    </div>
);

export const CreditCardSalmonStripVertical = () => (
    <div className="flex items-center justify-center">
        <CreditCard type="salmon-strip-vertical" />
    </div>
);

export const CreditCardCustomization = () => (
    <div className="flex flex-col gap-8">
        <div className="flex items-center justify-center">
            <CreditCard type="brand-dark" company="Brex" cardNumber="5678 9012 3456 7890" cardHolder="PEDRO FRANCESCHI" cardExpiration="12/28" />
        </div>
        <div className="flex items-center justify-center">
            <CreditCard type="gradient-strip" company="Apple Inc." cardNumber="0987 6543 2109 8765" cardHolder="TIM COOK" cardExpiration="06/29" />
        </div>
    </div>
);

export const CreditCardSizes = () => (
    <div className="flex flex-col items-center gap-8">
        <CreditCard type="brand-dark" width={240} />
        <CreditCard type="brand-dark" width={316} />
    </div>
);
