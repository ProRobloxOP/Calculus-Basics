import {
     Link,
} from "react-router-dom"

import {
     getCourses,
} from "../infos/courses"
import type {
     calculusLevel,
     topic,
     subtopic,
} from "../infos/courses"

import "./css/sidebar.css"

function showSidebarNav() {
     setTimeout(() => {
          const sidebarNav: HTMLElement = document.getElementById("sidebarNav") as HTMLElement;
          sidebarNav.hidden = false;
     }, 650);
}

function hideSidebar() {
     setTimeout(() => {
          const sidebar: HTMLElement = document.getElementById("sidebar") as HTMLElement;
          sidebar.hidden = true;
          sidebar.className = "";
          document.body.style.overflowY = "auto";
     }, 750);
}

function exitMenu() {
     const sidebar: HTMLElement = document.getElementById("sidebar") as HTMLElement;
     const sidebarNav: HTMLElement = document.getElementById("sidebarNav") as HTMLElement;
     
     sidebarNav.hidden = true;
     sidebar.className = "slideOut";
}

function createTopicDiv(topic: topic) {
     return (
          <div key={topic.name}>
               <h2 className="topic" key={topic.name + "-h2"}>{topic.name}</h2>
               <div>
                    {topic.subtopics.map((subtopic: subtopic) => (
                         <Link 
                              key={subtopic.name+"-link"}
                              to={topic.name.toLowerCase()+"/"+subtopic.name.toLowerCase()}
                              style={{color:"inherit", textDecoration:"none"}}
                              onClick={exitMenu}
                         >
                              <h3
                                   key={subtopic.name} 
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

export default function Sidebar(){
     const courses = getCourses();

     return (
          <div 
               id="sidebar"
               hidden={true}
               
               onAnimationStart={(e) => {
                    if (e.animationName == "sidebarOut"){ hideSidebar(); }
                    if (e.animationName == "sidebarIn"){ showSidebarNav(); }
               }}
          >
               <div 
                    id="exitArea"
                    onClick={exitMenu}
               />
               <div id="sidebarUI">
                    <nav id="sidebarNav" hidden={true}>
                         {courses.map((course : calculusLevel) => (
                              <div key={course.number+"-div"}>
                                   <h1 key={course.number} className="calcCourse">{"Calculus " + course.number}</h1>
                                   {course.topics.map(createTopicDiv)}
                              </div>
                         ))}
                    </nav>
               </div>
          </div>
     )
}
