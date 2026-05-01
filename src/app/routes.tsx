import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import LandingPage from "./components/LandingPage";
import ResearchPage from "./components/ResearchPage";
import DesignPage from "./components/DesignPage";
import DesignMRPage from "./components/DesignMRPage";
import DesignUXPage from "./components/DesignUXPage";
import Design3DMotionPage from "./components/Design3DMotionPage";
import AboutPage from "./components/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: LandingPage },
      { path: "research", Component: ResearchPage },
      { path: "design", Component: DesignPage },
      { path: "design/mr", Component: DesignMRPage },
      { path: "design/ux", Component: DesignUXPage },
      { path: "design/3d-motion", Component: Design3DMotionPage },
      { path: "about", Component: AboutPage },
    ],
  },
]);
