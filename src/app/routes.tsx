import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./components/Root";
import ResearchPage from "./components/ResearchPage";
import DesignPage from "./components/DesignPage";
import DesignCategoryPage from "./components/DesignCategoryPage";
import DesignProjectPage from "./components/DesignProjectPage";
import { aboutPage, homePage, type SitePage } from "./lib/pages";

const toResearch = () => <Navigate to="/research" replace />;

// Live page → as is; draft page (only exists in dev) → with a "Draft" tag; missing → redirect to /research.
function pageRoute(page: SitePage | undefined) {
  if (!page) return toResearch;
  if (!page.draft) return page.Component;
  const { Component } = page;
  return () => (
    <>
      <Component />
      <div className="pointer-events-none fixed bottom-4 left-4 z-50 rounded bg-[#fef3c7] px-2.5 py-1 text-[12px] font-semibold text-[#92400e] shadow-sm">
        Draft — only visible while running locally
      </div>
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: pageRoute(homePage) },
      { path: "research", Component: ResearchPage },
      { path: "design", Component: DesignPage },
      { path: "design/:category", Component: DesignCategoryPage },
      { path: "design/:category/:slug", Component: DesignProjectPage },
      { path: "about", Component: pageRoute(aboutPage) },
    ],
  },
]);
