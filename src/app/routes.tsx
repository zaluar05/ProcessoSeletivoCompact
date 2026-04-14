import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/root-layout";
import { HomePage } from "./pages/home";
import { PortfolioPage } from "./pages/portfolio";
import { AboutPage } from "./pages/about";
import { ContactPage } from "./pages/contact";
import { NotFound } from "./pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "portfolio", Component: PortfolioPage },
      { path: "sobre", Component: AboutPage },
      { path: "contato", Component: ContactPage },
      { path: "*", Component: NotFound },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
});