import { Routes, RouterModule } from "@angular/router";

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  {
    path: "changelog",
    loadChildren: () =>
      import("../../changelog/changelog.module").then((m) => m.ChangeLogModule),
  },
  {
    path: "full-layout",
    loadChildren: () =>
      import("../../pages/full-layout-page/full-pages.module").then(
        (m) => m.FullPagesModule
      ),
  },
  {
    path: "director",
    loadChildren: () =>
      import("../../pages/director/director.module").then(
        (m) => m.DirectorModule
      ),
  },
  {
    path: "message",
    loadChildren: () =>
      import("../../pages/chat/chat.module").then(
        (m) => m.ChatModule
      ),
  },
];
