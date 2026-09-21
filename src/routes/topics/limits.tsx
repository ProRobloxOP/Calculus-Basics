import {
     JSX,
     useState
} from "react"

import {
     MathJax,
} from "better-react-mathjax"

import "../../index.d.ts"

import styles from "../css/content.module.css"
import { 
     ArrowExpander
} from "../../tools/ui/arrowExpander.tsx"

function definitions() : JSX.Element {
     return (
          <div className={`${styles.content}`}>
               <h1 className={`${styles.title}`}>{"Limits: Real Value Functions"}</h1>
          </div>
     );
}

export default function Limits(): Map<string, () => JSX.Element> {
     return new Map<string, () => JSX.Element>([
          ["definitions", definitions],
          //["applications", rules],
     ])
}
