import {
     Outlet,
} from "react-router-dom"
import "../index.d.ts"

import headerWallpaper from "../assets/images/root/headerWallpaper.jpg"
import menuIcon from "../assets/images/root/menu.svg"

import "./css/root.css"
import Sidebar from "./sidebar"

function showSidebar() {
     const sidebar: HTMLElement = document.getElementById("sidebar") as HTMLElement;
     const sidebarNav: HTMLElement = document.getElementById("sidebarNav") as HTMLElement;

     document.body.style.overflowY = "hidden";

     sidebar.hidden = false;
     sidebar.className = "slideIn";
}

export function errorOccur() {
     return (
          <div style={{width: "100vw", height: "60vh", alignContent: "center", textAlign: "center"}}>
               <h1 style={{fontFamily: "Trirong, serial", fontSize: "10vh", margin: "0%"}}>Sorry!</h1>
               <h2 style={{fontFamily: "Trirong, serial", color: "rgb(192, 192, 192)"}}>An error occurred, please try refreshing!...</h2>
          </div>
     )
}

export default function Root() {
     return (
          <>
               <div 
                    id="header" className="headerIn"
                    onAnimationEnd={() => {
                         const header: HTMLElement = document.getElementById("header") as HTMLElement;
                         header.className="";
                    }}
               >
                    <img src={ headerWallpaper } id="background" />
                    <div id="title" >Calculus Basics</div>
                    <div id="topbar">
                         <button 
                              id="menuButton"
                              type="button"
                              onClick={ showSidebar }
                         >
                              <img src={ menuIcon } id="menuIcon"/>
                         </button>
                    </div>
               </div>
               <Sidebar/>
               <div style={{position: "absolute", top: "40vh", left: "0%"}}>
                    <Outlet />
               </div>
          </>
     )
}

