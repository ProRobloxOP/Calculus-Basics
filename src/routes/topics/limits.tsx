import {
     JSX,
     useState
} from "react"

import {
     MathJax,
} from "better-react-mathjax"

import "../../index.d.ts"

// Limit Assets
import epsilonDeltaDefPng from "../../assets/images/topics/limits/epsilonDeltaDef.png"

import styles from "../css/content.module.css"
import { 
     ArrowExpander
} from "../../tools/ui/arrowExpander.tsx"

function definitions() : JSX.Element {
     const [
          [epDeltaArrowActive, setEpDeltaArrow]
     ] = [
          useState(true)
     ]

     return (
          <div className={`${styles.content}`}>
               <h1 className={`${styles.title}`}>{"Limits: Epsilon-Delta Definition"}</h1>
               <div className={`${styles.section}`}>
                    <MathJax className={`${styles.p2}`}>{
                         'Let \\(c\\), \\(\\epsilon\\) (Epsilon, "the error"), and \\(\\delta\\) (Delta) be arbitary real numbers, then,'
                    }</MathJax>
                    <MathJax className={`${styles.p2}`}>{"\\(\\lim_{x \\to c}{f(x)} = L\\) \\(\\qquad\\) [\\(L \\in \\mathbb{R}\\)]"}</MathJax>
                    <div style={{display: "flex", alignItems: "center", textAlign: "center"}}>
                         <div className={styles.p3} style={{left: "26%", position: "absolute"}}> 
                              <ArrowExpander 
                                   activeType="up" 
                                   inactiveType="down"
                                   activeListener={() => {
                                        setEpDeltaArrow(false);
                                   }}
                                   inactiveListener={() => {
                                        setEpDeltaArrow(true);
                                   }}
                              /> 
                         </div>
                         <MathJax className={`${styles.p2}`} style={{width: "100%"}}>{"Where, \\(c - \\delta < x < c + \\delta\\) and, \\(L - \\epsilon < f(x) < L + \\epsilon\\)."}</MathJax>
                    </div>
                    <div hidden={epDeltaArrowActive}>
                         <img className={`${styles.img_lightborder}`} src={epsilonDeltaDefPng} style={{width: "30%", height: "auto"}}></img>
                         <p className={`${styles.caption}`}>{"Source: Brilliant.org"}</p>
                    </div>
                    <MathJax className={`${styles.p2}`}>{'The limit above is read as: "The limit of \\(f\\) of \\(x\\) as \\(x\\) approaches \\(c\\)..."'}</MathJax>
               </div>

               <h1 className={`${styles.title}`}>{"Limits: One-Sided Limit"}</h1>
               <div className={`${styles.section}`}>
                    <div className={`${styles.section}`}>
                         <MathJax className={`${styles.p2}`}>{"Inheriting the conditions from the previous definition, but when \\(c < x < c + \\delta\\),"}</MathJax>
                         <MathJax className={`${styles.p2}`}>{"\\(\\lim_{x \\to c^{+}}{f(x)} = L\\)"}</MathJax>
                         <MathJax className={`${styles.p2}`}>{'Which is pronounced: "The limit of \\(f(x)\\) as \\(x\\) approaches \\(c\\) from the right".'}</MathJax>
                    </div>
                    <div className={`${styles.section}`}>
                         <MathJax className={`${styles.p2}`}>{"The limit from the right is called the right hand limit. Similarly, when \\(c -\\delta\\ < x < c\\),"}</MathJax>
                         <MathJax className={`${styles.p2}`}>{"\\(\\lim_{x \\to c^{-}}{f(x)} = L\\)"}</MathJax>
                    </div>
                    <div className={`${styles.section}`}>
                         <p className={`${styles.p2}`}>{"For a limit to exist the right and left hand limits must be equal, i.e.,"}</p>
                         <MathJax className={`${styles.p2}`}>{"\\(\\lim_{x \\to c^{+}}{f(x)} = \\lim_{x \\to c^{-}}{f(x)} = \\lim_{x \\to c}{f(x)} = L\\)"}</MathJax>
                         <MathJax className={`${styles.p2}`}>{"If any condition above is false, \\(\\lim_{x \\to c}{f(x)} = \\) DNE (Does Not Exist)."}</MathJax>
                    </div>
               </div>
          </div>
     );
}

export default function Limits(): Map<string, () => JSX.Element> {
     return new Map<string, () => JSX.Element>([
          ["definitions", definitions],
          //["applications", rules],
     ])
}
