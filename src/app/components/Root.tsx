import { Outlet } from "react-router";
import Navigation from "./Navigation";

export function Root() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navigation />
      <Outlet />
    </div>
  );
}
