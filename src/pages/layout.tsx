import * as React from "react";
import Header from "@/layout/header";
import { Outlet } from "react-router-dom";
import "./layout.scss";
import { Props, SubMenuEntity } from "./model/layout";

const SubMenu: React.FC<Props> = ({ subMenu }) => {
  return (
    <div className="sub-menu-container flex justify-center items-center">
      {subMenu.map((item: SubMenuEntity) => (
        <div role="button" className="sub-menu" key={item.name}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

function Layout() {
  const [subMenu, setSubMenu] = React.useState<SubMenuEntity[]>([]);
  const handleMenuChange = React.useCallback(
    (menu: SubMenuEntity[]) => {
      setSubMenu([...menu]);
    },
    [subMenu]
  );
  return (
    <div>
      <Header onMenuChange={handleMenuChange} />
      {subMenu.length > 0 && <SubMenu subMenu={subMenu} />}
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
