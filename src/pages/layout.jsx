import * as React from "react";
import Header from "@/layout/header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header test="" />
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
