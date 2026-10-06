import { BriefcaseIcon, FolderKanbanIcon, HomeIcon, NotebookPenIcon } from "lucide-react";

export const NAV_LINKS = {
    "Home": {
        path: "/",
        icon: HomeIcon
    },

    "Work": {
        path: "/work",
        icon: BriefcaseIcon,
    },

    "Projects": {
        path: "/projects",
        icon: FolderKanbanIcon,
    },

    "Blogs": {
        path: "/blogs",
        icon: NotebookPenIcon,
    },
} as const;

export const NAV_ENTRIES = Object.entries(NAV_LINKS)
