import { withOverlayAware } from "@/components/internal/decorators";
import * as Demos from "./sidebar-navigation.demo";

export default {
    title: "Application/Application navigation",
    decorators: [withOverlayAware((Story, context) => <div className="min-h-screen w-full bg-primary">{Story(context, context)}</div>)],
};

export const SidebarNavigationSimpleDemo = () => <Demos.SidebarNavigationSimpleDemo />;
SidebarNavigationSimpleDemo.storyName = "Sidebar navigation simple";
SidebarNavigationSimpleDemo.parameters = {
    design: {
        desktop: "1161-8593",
    },
};

export const SidebarNavigationDualTierDemo = () => <Demos.SidebarNavigationDualTierDemo />;
SidebarNavigationDualTierDemo.storyName = "Sidebar navigation dual-tier";
SidebarNavigationDualTierDemo.parameters = {
    design: {
        desktop: "1161-17322",
    },
};

export const SidebarNavigationSlimDemo = () => <Demos.SidebarNavigationSlimDemo />;
SidebarNavigationSlimDemo.storyName = "Sidebar navigation slim";
SidebarNavigationSlimDemo.parameters = {
    design: {
        desktop: "1165-2013",
    },
};

export const SidebarSectionDividersDemo = () => <Demos.SidebarSectionDividersDemo />;
SidebarSectionDividersDemo.storyName = "Sidebar sections dividers";
SidebarSectionDividersDemo.parameters = {
    design: {
        desktop: "7893-127251",
    },
};

export const SidebarNavigationSectionsSubheadingsDemo = () => <Demos.SidebarNavigationSectionsSubheadingsDemo />;
SidebarNavigationSectionsSubheadingsDemo.storyName = "Sidebar navigation sections subheadings";
SidebarNavigationSectionsSubheadingsDemo.parameters = {
    design: {
        desktop: "7901-412479",
    },
};
