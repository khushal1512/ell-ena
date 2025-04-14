import type { SidebarLink } from "@/types";
export const themes = [
    { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
    { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
    { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
  ];

  
export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/meet",
    label: "Meetings",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/important",
    label: "Important",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tasks",
    label: "Tasks",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-ellena",
    label: "Ask Ell-ena",
  },
];
