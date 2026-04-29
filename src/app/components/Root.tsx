import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { BackgroundTexture } from "./BackgroundTexture";

export function Root() {
  return (
    <div className="min-h-screen bg-background">
      <BackgroundTexture />
      <Navigation />
      <Outlet />
    </div>
  );
}
