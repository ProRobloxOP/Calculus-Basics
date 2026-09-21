import {
     Link,
     useLocation,
} from "react-router-dom"

import {
     getCourses,
} from "../infos/courses"

import {
     getLinkName
} from "./topicHandler"

import type {
     calculusLevel,
     topic,
     subtopic,
} from "../infos/courses"

import "./css/sidebar.css"
import { createContext, Dispatch, ReactElement, SetStateAction, useContext } from "react"
import { HeaderClassContext } from "./root"

export interface SidebarSettings {
     ["hidden"] : boolean,
     ["className"] : string
}

export type SidebarContext = {hiddenSidebar : SidebarSettings, setHiddenSidebar : Dispatch<SetStateAction<SidebarSettings>>}
export const SidebarContext = createContext<SidebarContext | unknown>(null);

export function SidebarProvider({context, children} : {context : SidebarContext, children : ReactElement}) : ReactElement {
     return <SidebarContext.Provider value={context}>
          {children}
     </SidebarContext.Provider>
}

export default function Sidebar() : ReactElement {
     const {hiddenSidebar, setHiddenSidebar} = useContext(SidebarContext) as SidebarContext;
     const {setHeaderClass} = useContext(HeaderClassContext) as HeaderClassContext;
     const location = useLocation();
     const courses = getCourses();

     function showSidebarNav() {
          setTimeout(() => {
               setHiddenSidebar({
                    ["hidden"] : false,
                    ["className"] : ""
               });
          }, 650);
     }

     function hideSidebar() {
          setTimeout(() => {
               setHiddenSidebar({
                    ["hidden"] : true,
                    ["className"] : ""
               });
               document.documentElement.style.overflow = "auto";
          }, 750);
     }

     function exitMenu(linkName : String) {
          if (location.pathname != linkName ){ setHeaderClass("headerIn") } else {
               document.documentElement.style.overflow = "auto";
          }
          
         setHiddenSidebar({
               ["hidden"] : false,
               ["className"] : "slideOut"
          });
     }

     function createTopicDiv(topic: topic) {
          return (
               <div key={topic.name}>
                    <h2 className="topic" key={topic.name + "-h2"}>{topic.name}</h2>
                    <div>
                         {topic.subtopics.map((subtopic: subtopic) => (
                              <Link 
                                   key={getLinkName(subtopic.name)+"-link"}
                                   to={getLinkName(topic.name)+"/"+getLinkName(subtopic.name)}
                                   style={{color:"inherit", textDecoration:"none"}}
                                   onClick={() => exitMenu("/"+getLinkName(topic.name)+"/"+getLinkName(subtopic.name))}
                              >
                                   <h3
                                        key={getLinkName(subtopic.name)} 
                                        className="subtopic"
                                   >
                                        {subtopic.name}
                                   </h3>
                              </Link>
                         ))}
                    </div>
               </div>
          )
     }

     return (
          <SidebarContext.Provider value={{hiddenSidebar, setHiddenSidebar}}>
               <div
                    id="sidebar"
                    className={`${hiddenSidebar.className}`}
                    hidden={hiddenSidebar.hidden}
                    
                    onAnimationStart={(e) => {
                         if (e.animationName == "sidebarOut"){ hideSidebar(); }
                         if (e.animationName == "sidebarIn"){ showSidebarNav(); }
                    }}
               >
                    <div 
                         id="exitArea"
                         onClick={() => exitMenu(location.pathname)}
                    />
                    <nav className="sidebarUI sidebarNav" hidden={hiddenSidebar.hidden}>
                         {courses.map((course : calculusLevel) => (
                              <div key={course.number+"-div"}>
                                   <h1 key={course.number} className="calcCourse">{"Calculus " + course.number}</h1>
                                   {course.topics.map(createTopicDiv)}
                              </div>
                         ))}
                    </nav>
               </div>
          </SidebarContext.Provider>
     )
}
