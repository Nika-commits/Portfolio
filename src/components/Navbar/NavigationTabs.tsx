import { NAV_ENTRIES } from "#/utils/Navlinks.ts";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { GradientText } from "../animate-ui/primitives/texts/gradient";

// export const PATHS = NAV_LINKS.map((l) => l.path);

export default function NavigationTabs() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <div className="flex fixed left-1/2 z-50 -translate-x-1/2 lg:translate-x-0 items-center justify-center bottom-[2dvh] lg:static ">
            <Tabs
                value={pathname}
                className="bg-background border-2 border-primary/30 rounded-3xl"
            >
                <TabsList className="p-2 gap-6 rounded-3xl">
                    {NAV_ENTRIES.map(([key, { path, icon: Icon }], idx) => {
                        const isActive = pathname === path;
                        return (
                            <TabsTrigger
                                key={path}
                                value={path}
                                className="h-9 gap-1.5 rounded-3xl cursor-pointer border-2 border-secondary  "
                                onClick={() => {
                                    const currentIndex = NAV_ENTRIES.findIndex(
                                        ([, link]) => link.path === pathname
                                    );
                                    navigate({
                                        to: path,
                                        viewTransition: {
                                            types:
                                                currentIndex > idx
                                                    ? ["slide-right"]
                                                    : ["slide-left"],
                                        },
                                    });
                                }}
                            >

                                <Icon />
                                {isActive && (
                                    <GradientText
                                        // gradient="var(--gradient-primary)"
                                        text={key}
                                        className="text-sm font-medium whitespace-nowrap"
                                    />
                                )}
                            </TabsTrigger>
                        );
                    })}
                </TabsList>
            </Tabs>
        </div>
    );
}
