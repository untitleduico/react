import { withOverlayAware } from "@/components/internal/decorators";
import * as Demos from "./header-navigation.demo";

export default {
    title: "Application/Application navigation",
    decorators: [
        withOverlayAware((Story) => (
            <div className="min-h-screen w-full bg-primary">
                <Story />
            </div>
        )),
    ],
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

export const HeaderNavigationTabsDemo = () => <Demos.HeaderNavigationTabsDemo />;
HeaderNavigationTabsDemo.storyName = "Header navigation tabs";
HeaderNavigationTabsDemo.parameters = {
    design: {
        desktop: "11910-608084",
    },
};

export const HeaderNavigationCenteredDemo = () => <Demos.HeaderNavigationCenteredDemo />;
HeaderNavigationCenteredDemo.storyName = "Header navigation centered";
HeaderNavigationCenteredDemo.parameters = {
    design: {
        desktop: "11910-613771",
    },
};
