import * as React from "react";
import Header from "@/layout/header";
import { Outlet } from "react-router-dom";
import './layout.scss'

const SubMenu = () => {
  return(
    <div className="sub-menu-container">111</div>
  );
}

function Layout() {
  return (
    <div>
      <Header test="" />
      <SubMenu />
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
