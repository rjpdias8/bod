import { RouteInfo } from "./sidebar.metadata";

export const ROUTES: RouteInfo[] = [
  {
    path: "/full-layout",
    title: "Full Layout",
    icon: "ft-layout",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: false,
    submenu: [],
  },
  {
    path: "/director",
    title: "Directors",
    icon: "ft-layout",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: false,
    submenu: [],
  },
  {
    path: "/director/send-invitation",
    title: "Send Invitation",
    icon: "ft-layout",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: false,
    submenu: [],
  },
  {
    path: "/director/invitations",
    title: "Invitations",
    icon: "ft-layout",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: false,
    submenu: [],
  },
  {
    path: "/director/my-board",
    title: "My Board",
    icon: "ft-layout",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: false,
    submenu: [],
  },
  {
    path: "/director/serving-board",
    title: "Serving Board",
    icon: "ft-layout",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: false,
    submenu: [],
  },
  {
    path: "/content-layout",
    title: "Content Layout",
    icon: "ft-square",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: false,
    submenu: [],
  },
  {
    path: "",
    title: "Menu Levels",
    icon: "ft-align-left",
    class: "has-sub",
    badge: "1",
    badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
    isExternalLink: false,
    submenu: [
      {
        path: "javascript:;",
        title: "Second Level",
        icon: "",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: true,
        submenu: [],
      },
      {
        path: "",
        title: "Second Level Child",
        icon: "",
        class: "has-sub",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [
          {
            path: "javascript:;",
            title: "Third Level 1.1",
            icon: "",
            class: "",
            badge: "",
            badgeClass: "",
            isExternalLink: true,
            submenu: [],
          },
          {
            path: "javascript:;",
            title: "Third Level 1.2",
            icon: "",
            class: "",
            badge: "",
            badgeClass: "",
            isExternalLink: true,
            submenu: [],
          },
        ],
      },
    ],
  },
  {
    path: "/changelog",
    title: "ChangeLog",
    icon: "ft-file",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: false,
    submenu: [],
  },
  {
    path:
      "https://pixinvent.com/apex-angular-4-bootstrap-admin-template/documentation",
    title: "Documentation",
    icon: "ft-folder",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: true,
    submenu: [],
  },
  {
    path: "https://pixinvent.ticksy.com/",
    title: "Support",
    icon: "ft-life-buoy",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: true,
    submenu: [],
  },
];
