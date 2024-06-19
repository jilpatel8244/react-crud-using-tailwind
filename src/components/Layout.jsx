import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import Header from "./Header";
import { useState } from "react";

export default function Layout() {
  const [sideMenu, setSideMenu] = useState(true);
  const toggleSideMenu = () => setSideMenu(!sideMenu);
  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {sideMenu && <Aside />}
        <div className="flex flex-col flex-1 h-lvh overflow-auto">
          <Header toggleSideMenu={toggleSideMenu}/>
          <Outlet />
        </div>
      </div>
    </>
  );
}
