import { withOverlayAware } from "@/components/internal/decorators";
import * as Demos from "./header-navigation.demo";

export default {
    title: "Application/Application navigation",
    decorators: [withOverlayAware((Story, context) => <div className="min-h-screen w-full bg-primary">{Story(context, context)}</div>)],
};

export const HeaderNavigationSimpleDemo = () => <Demos.HeaderNavigationSimpleDemo />;
HeaderNavigationSimpleDemo.storyName = "Header navigation simple";
HeaderNavigationSimpleDemo.parameters = {
    design: {
        desktop: "1208-104342",
    },
};

export const HeaderNavigationDualTierDemo = () => <Demos.HeaderNavigationDualTierDemo />;
HeaderNavigationDualTierDemo.storyName = "Header navigation dual-tier";
HeaderNavigationDualTierDemo.parameters = {
    design: {
        desktop: "1208-101427",
    },
};
