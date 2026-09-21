import { Outlet, StaticHandler } from "react-router-dom";
import "../index.d.ts";

import headerWallpaper from "../assets/images/root/headerWallpaper.jpg";
import menuIcon from "../assets/images/root/menu.svg";

import "./css/root.css";
import Sidebar, { SidebarProvider } from "./sidebar";
import { createContext, Dispatch, SetStateAction, useRef, useState } from "react";

export const HeaderClassContext = createContext<{
     headerClassName : string,
     setHeaderClass : Dispatch<SetStateAction<string>>
} | unknown>(null);
export const RootContext = createContext(null);

export type HeaderClassContext = {headerClassName : String, setHeaderClass : Dispatch<SetStateAction<String>>};

export function errorOccur() {
     return <div
          style={{
               width: "100%",
               height: "60%",
               alignContent: "center",
               textAlign: "center",
          }}
     >
          <h1
               style={{
                    fontFamily: "Trirong, serial",
                    fontSize: "10vh",
                    margin: "0%",
               }}
          >
               Sorry!
          </h1>
          <h2
               style={{ fontFamily: "Trirong, serial", color: "rgb(192, 192, 192)" }}
          >
               An error occurred, please try refreshing!...
          </h2>
     </div>;
}

export default function Root() {
     const toggleSidebar = useRef(false);
     const [headerClassName, setHeaderClass] = useState("headerIn");
     const [hiddenSidebar, setHiddenSidebar] = useState({
          ["hidden"] : true,
          ["className"] : "",
     });

     function showSidebar() {
          document.documentElement.style.overflow = "hidden";
          setHiddenSidebar({
               hidden: false,
               className: "slideIn",
          });

          toggleSidebar.current = false;
     }

     return <HeaderClassContext.Provider value={{headerClassName, setHeaderClass}}>
          <div
               id="header"
               className={headerClassName}
               onAnimationEnd={() => {
                    setHeaderClass("");
               }}
          >
               <img src={headerWallpaper} id="background" />
               <div id="title">{"Calculus Basics"}</div>
               <div id="topbar">
                    <button id="menuButton" type="button" onClick={showSidebar}>
                         <img src={menuIcon} id="menuIcon" />
                    </button>
               </div>
          </div>
          <SidebarProvider context={{hiddenSidebar, setHiddenSidebar}}>
               <Sidebar></Sidebar>
          </SidebarProvider>

          <div style={{ position: "absolute", top: "max(28vw, 30vh)", left: "0%" }}>
               <Outlet />
          </div>
     </HeaderClassContext.Provider>;
}
