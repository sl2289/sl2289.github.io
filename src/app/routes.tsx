import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Research } from "./components/Research";
import { Design } from "./components/Design";
import { About } from "./components/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "research", Component: Research },
      { path: "design", Component: Design },
      { path: "about", Component: About },
    ],
  },
]);
