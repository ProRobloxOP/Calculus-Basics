import React, {
     JSX,
} from "react"

import {
     redirect,
     useLoaderData,
} from "react-router-dom"

import {
     MathJaxContext,
} from "better-react-mathjax"

import Differentiation from "./topics/differentiation";

export const topicModules: Map<string, () => Map<string, () => JSX.Element>> = new Map<string, () => Map<string, () => JSX.Element>>([
     ["differentiation", Differentiation],
]);

export function getLinkName(str : string) {
     return str.replaceAll(" ", "-").toLowerCase();
}

export async function loader({ params }: any) {
     const topic: string = params.topic;
     const subtopic: string = params.subtopic;
     const topicCreator: () => Map<string, Function> = topicModules.get(topic) as () => Map<string, Function>;
     
     if (topicCreator == null || topicCreator().get(subtopic) == null){ 
          throw redirect("/topic-in-progress");
     }

     return {
          ["topic"]: topic,
          ["subtopic"]: subtopic,
     }
}

export function topicInProgress() {
     return (
          <div style={{width: "100vw", height: "60vh", alignContent: "center", textAlign: "center"}}>
               <h1 style={{fontFamily: "Trirong, serial", fontSize: "10vh", margin: "0%"}}>Sorry!</h1>
               <h2 style={{fontFamily: "Trirong, serial", color: "rgb(192, 192, 192)"}}>This section is still being created...</h2>
          </div>
     )
}

export default function TopicHandler(): JSX.Element {
     const lessonMap: {["topic"]: string, ["subtopic"]: string} = useLoaderData();
     const topicCreator: () => Map<string, () => JSX.Element> = topicModules.get(lessonMap.topic) as () => Map<string, () => JSX.Element>;
     const lessonElement: () => JSX.Element = topicCreator().get(lessonMap.subtopic) as () => JSX.Element;

     return (
          <MathJaxContext>
               {lessonElement()}
          </MathJaxContext>
     );
}
