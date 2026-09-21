import {
     JSX,
     useState
} from "react"

import {
     MathJax,
} from "better-react-mathjax"

//Definition Assets
import avRateOfChangePng from "../../assets/images/topics/differentiation/avRateOfChange.png"
import secantToTangentPng from "../../assets/images/topics/differentiation/secantToTangent.png"

//Rules Assets
import abs_x_derivativePng from "../../assets/images/topics/differentiation/abs_x_derivative.png"
import peicewise_1_derivativePng from "../../assets/images/topics/differentiation/piecewise_1_derivative.png"
import cubic_root_x_derivativePng from "../../assets/images/topics/differentiation/cubic_root_x_derivative.png"

import "../../index.d.ts"

import styles from "../css/content.module.css"
import { 
     ArrowExpander
} from "../../tools/ui/arrowExpander.tsx"

function definitions(): JSX.Element {
     return (
          <div className={`${styles.content}`}>
               <h1 className={`${styles.title}`}>Derivative: Limit Definition</h1>
               <div className={`${styles.section}`} style={{display:"flex", alignItems: "center"}}>
                    <div style={{marginRight:"3%", marginLeft: "3%", width: "40%"}}>
                         <img src={avRateOfChangePng} style={{width: "100%", height: "auto"}}></img>
                         <p className={`${styles.caption}`} style={{margin: "0%"}}>Source: cuemath.com</p>
                    </div>
                    <div style={{width: "50%"}}>
                         <MathJax className={`${styles.p0}`}>{
                              "The average rate of change for any function \\(f(x)\\) and a step \\(h\\) (\\(\\Delta x\\)) can be represented as:"
                         }</MathJax>
                         <MathJax className={styles.p0}>{"\\(c(x) = \\frac{\\Delta y}{\\Delta x} = \\frac{f(x+ \\Delta x) - f(x)}{\\Delta x} = \\frac{f(x+h) - f(x)}{h} \\)"}</MathJax>
                         <MathJax className={styles.p0}>{
                              "And a secant line between \\(x_0\\) and \\(x_1\\) can be written as:"                    
                         }</MathJax>
                         <MathJax className={styles.p0}>{"\\(s(x) = (x-x_0)\\frac{f(x_1)-f(x_0)}{x_1-x_0}+f(x_0) \\qquad [h=x_1-x_0]\\)"}</MathJax>
                    </div>
               </div>
               <div className={styles.section}>
                    <MathJax className={styles.p1}>{"Therefore when \\(h \\to 0\\), the limit definition of a derivative (instantaneous change) is:"}</MathJax>
                    <MathJax className={styles.p1}>{"\\(f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} \\)"}</MathJax>
                    <MathJax className={styles.p1}>{
                         "Which graphically forms a tangent line around \\(x_0\\), as the second point (\\(x_1\\)) in the secant line approaches \\(x_0\\)."
                    }</MathJax>
                    <img src={secantToTangentPng} style={{width: "30%", height: "auto"}}></img>
                    <p className={styles.caption}>Source: dibgerge.com</p>
               </div>

               <h1 className={styles.title}>Common Single Variable Derivative Notations</h1>
               <div className={styles.section}>
                    <MathJax className={styles.p1}>{"\\(f'(x), \\quad \\frac{d}{dx}f(x), \\quad \\frac{df}{dx}(a), \\quad \\frac{dy}{dx}, \\quad \\frac{d^2y}{dx^2}\\)"}</MathJax>
                    <MathJax className={styles.p1}>{`\\(f'(x)\\) is read as "\\(f\\) prime of \\(x\\)", and \\(f''(x)\\) is "\\(f\\) double prime of \\(x\\)".`}</MathJax>
                    <MathJax className={styles.p1}>{`\\(\\frac{dy}{dx}\\) is pronounced "The derivative of \\(y\\) with respect to \\(x\\)".`}</MathJax>
               </div>
               
               <h1 className={styles.title}>Derivative: Infinitesimal Definition</h1>
               <div className={styles.section}>
                    <MathJax className={styles.p1}>{"Let \\(dx\\) be an infintesimal distance (\\(\\frac{1}{1+1+\\cdots+1}\\)) on the \\(x\\)-axis."}</MathJax>
                    <MathJax className={styles.p1}>{"Then where the st (standard part) function rounds of \\(dx\\) (or any other hyperreal),"}</MathJax>
                    <MathJax className={styles.p1}>{"\\(f'(x) =\\) st\\((\\frac{f(x + dx) - f(x)}{dx})\\)"}</MathJax>
               </div>

               <h1 className={styles.title}>Resources: Definition of a Derivative</h1>
               <div className={styles.section}>
                    <iframe  src="https://www.youtube.com/embed/PGK-RXA8Ye8" title="The definition of a derivative" style={{border: "none", width: "80vw", height: "80vh"}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
               </div>
          </div>
     )
}

function rules(): JSX.Element {
     const [graphsHiddden, setGraphsHidden] = useState(true);

     return (
          <div className={styles.content}>
               {/* Minor Rule: Differentiability */}
               <h1 className={styles.title}>Derivative: Differentiability</h1>
               <div className={styles.section}>
                    <MathJax className={styles.p1}>{"All functions are not differentiable throughout; a function at a \\(x\\)-coordinate (\\(a\\)) has a derivative if:"}</MathJax>
                    <ol type="1" className={styles.p1} style={{display: "inline-block", textAlign: "justify"}}>
                         <li><MathJax>{"The function is continuous when \\(x = a\\)."}</MathJax></li>
                         <li><MathJax>{"Is not at a cusp, sharp-point, or kink (eg. \\(|x|\\))."}</MathJax></li>
                         <li><MathJax>{"The tangent at the point is not vertical (eg. \\(x^\\frac{1}{3}\\))."}</MathJax></li>
                         <li>{"If the following is true (which checks all of the above):"}</li>
                         <dl  style={{padding: "3%", width: "100%"}}>
                              <dt><MathJax style={{paddingLeft: "15%", paddingBottom: "3%"}}>{
                                   "\\(\\lim_{h \\to 0^+} \\frac{f(a+h)-f(a)}{h} = \\lim_{h \\to 0^-} \\frac{f(a+h)-f(a)}{h}\\)"
                              }</MathJax></dt>
                              <dt>{"And the limit is finite (not valued at infinity or undefined)."}</dt>
                         </dl>
                    </ol>

                    <div style={{display: "flex", alignItems: "center", textAlign: "center"}}>
                         <div className={styles.title} style={{left: "36%", position: "absolute"}}> 
                              <ArrowExpander 
                                   activeType="up" 
                                   inactiveType="down"
                                   activeListener={() => {
                                        setGraphsHidden(false);
                                   }}
                                   inactiveListener={() => {
                                        setGraphsHidden(true);
                                   }}
                              /> 
                         </div>
                         <h1 className={styles.title} style={{width: "100%"}}>Graphical Illustrations</h1>
                    </div>
                    <div className={`${styles.section} ${styles.p2}`} hidden={graphsHiddden}>
                         <div>
                              <MathJax style={{margin: "3%"}}>{
                                   "1) \\(f(x)=\\begin{cases}" +
                                   "x+2, & x \\le 0 \\\\" +
                                   "x, & x > 0" +
                                   "\\end{cases}\\)"
                              }</MathJax>
                              <img className={`${styles.img_lightborder}`} src={peicewise_1_derivativePng} style={{width: "80%", height: "auto"}}/>
                              <MathJax className={`${styles.caption}`}>{"Since \\(f(x)\\) is discontinuous when \\(x=0\\), its derivative has an open circle at \\((0,1)\\)."}</MathJax>
                         </div>
                         <div>
                              <MathJax style={{margin: "3%"}}>{
                                   "2) \\(f(x)=|x|\\)"
                              }</MathJax>
                              <img className={`${styles.img_lightborder}`} src={abs_x_derivativePng} style={{width: "80%", height: "auto"}}/>
                              <MathJax className={`${styles.caption}`}>{"Since the derivative of \\(|x|\\) is discontinuous at \\((0, 0)\\), \\(f'(0)\\) is undefined and \\(f(x)\\) is undifferentiable at that point."}</MathJax>
                         </div>
                         <div>
                              <MathJax style={{margin: "3%"}}>{
                                   "3) \\(f(x)=x^\\frac{1}{3}\\)"
                              }</MathJax>
                              <img className={`${styles.img_lightborder}`} src={cubic_root_x_derivativePng} style={{width: "80%", height: "auto"}}/>
                              <MathJax className={`${styles.caption}`}>{"Although \\(f(x)\\) is continuous and curved, the limit is not finite and the tangent is vertical when \\(x=0\\)."}</MathJax>
                         </div>
                    </div>
               </div>

               {/* 1st Rule: Power Rule */}
               <h1 className={styles.title}>Derivative: Power Rule</h1>
               <div className={`${styles.section} ${styles.p1}`}>
                    <MathJax>{"Let \\(f(x) = ax^n\\) i.e. a polynomial function including \\(n \\leq 0\\). Then,"}</MathJax>
                    <MathJax>{"\\(f'(x) = a(n-1)x^{n-1}\\)"}</MathJax>
               </div>

               {/* 2nd Rule: Chain Rule */}
               <h1 className={styles.title}>Derivative: Chain Rule</h1>
               <div className={`${styles.section} ${styles.p1}`}>
                    <MathJax>{"Let \\(h(x) = g(f(x))\\), which \\(f(x)\\) and \\(g(x)\\) are differentiable. Then,"}</MathJax>
                    <MathJax>{"\\(h'(x) = f'(x) \\cdot g'(f(x))\\)"}</MathJax>
                    <MathJax style={{marginTop: "1%"}}>{"Also let \\(h(x) = y\\), \\(g(x) = u\\), then,"}</MathJax>
                    <MathJax className={`${styles.p3}`} style={{marginBottom: 0}}>{"\\(\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}\\)"}</MathJax>
               </div>

               {/* 3rd Rule: Product Rule */}
               <h1 className={styles.title}>Derivative: Product Rule</h1>
               <div className={`${styles.section} ${styles.p1}`}>
                    <MathJax>{"Let \\(h(x) = f(x) \\cdot g(x)\\), which \\(f(x)\\) and \\(g(x)\\) are differentiable. Then,"}</MathJax>
                    <MathJax>{"\\(h'(x) = f'(x) \\cdot g(x) + g'(x) \\cdot f(x)\\) "}</MathJax>
               </div>

               {/* 4th Rule: Quotient Rule */}
               <h1 className={styles.title}>Derivative: Quotient Rule</h1>
               <div className={`${styles.section} ${styles.p1}`}>
                    <MathJax>{"Let \\(h(x) = \\frac{f(x)}{g(x)}\\), which \\(f(x)\\) and \\(g(x)\\) are differentiable. Then,"}</MathJax>
                    <MathJax>{"\\(h'(x) = \\frac{f'(x) \\cdot g(x) - g'(x) \\cdot f(x)}{(g(x))^2}\\)"}</MathJax>
               </div>

               {/* 5th Rule: L'Hôpital's Rule */}
               <h1 className={styles.title}>Derivative: L'Hôpital's Rule</h1>
               <div className={`${styles.section} ${styles.p1}`}>
                    <MathJax>{"Let \\(h(c) = \\lim_{x \\to c} \\frac{f(x)}{g(x)}\\) for which \\(h(c)\\) usually evaluates to an indeterminate form (eg. \\(\\frac{0}{0}\\) or \\(\\pm \\frac{\\infty}{\\infty})\\). Then,"}</MathJax>
                    <MathJax>{"\\(h(c) = \\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)}\\)"}</MathJax>
                    <MathJax>{"Where the limit results in a determinate form. Note: Do not use quotient rule!"}</MathJax>
               </div>
          </div>
     )
}

function non_polynomials(): JSX.Element {
     const [arrowHidden, setArrowHidden] = useState(true);

     return (
          <div className = {styles.content}>
               <h1 className={styles.p0}><MathJax>{"*Note: All input (\\(x\\)) can be replaced with a function and must be chain ruled!"}</MathJax></h1>
               <h1 className={styles.title}>Derivative: Trignometric Functions</h1>
               <div className={`${styles.section} ${styles.p3}`}>
                    <MathJax>{"\\(\\frac{d}{dx} sin(x) = cos(x)\\)"}</MathJax>
                    <MathJax>{"\\(\\frac{d}{dx} cos(x) = -sin(x)\\)"}</MathJax>
                    <MathJax>{"\\(\\frac{d}{dx} tax(x) = \\frac{1}{cos^2(x)}\\)"}</MathJax>
               </div>

               <h1 className={styles.title}>Derivative: Exponential Functions</h1>
               <div className={`${styles.section2} ${styles.p3}`}>
                    <MathJax>{"\\(\\frac{d}{dx} a^x = a^xln(a)\\)"}</MathJax>
               </div>

               <h1 className={styles.title}>Derivative: Transcendental Functions</h1>
               <div className={`${styles.section2} ${styles.p3}`}>
                    <MathJax>{"\\(\\frac{d}{dx} x^x = \\frac{d}{dx} e^{\\ln x^x} = \\frac{d}{dx} e^{x \\ln x} = e^{x\\ln x}(\\ln x + 1)  = x^x(\\ln x + 1) \\)"}</MathJax>
               </div>
               <div style={{display: "flex", alignItems: "center", textAlign: "center"}}>
                    <div className={styles.title} style={{left: "36%", position: "absolute"}}> 
                         <ArrowExpander 
                              activeType="up" 
                              inactiveType="down"
                              activeListener={() => {
                                   setArrowHidden(false);
                              }}
                              inactiveListener={() => {
                                   setArrowHidden(true);
                              }}
                         /> 
                    </div>
                    <h1 className={styles.title} style={{width: "100%"}}>Alternative Solution</h1>
               </div>

               <div className={`${styles.section} ${styles.p2}`} hidden={arrowHidden}>
                    <MathJax>{"Let \\(y=x^x \\implies \\ln y = x \\ln x \\) then,"}</MathJax>
                    <MathJax>{"\\(\\frac{d}{dx} \\ln y = \\frac{d}{dx} (x \\ln x) \\)"}</MathJax>
                    <MathJax>{"\\(\\frac{d}{dy} \\ln y \\cdot \\frac{dy}{dx} = \\ln x + 1 \\)"}</MathJax>
                    <MathJax className={`${styles.p3}`} style={{marginBottom: 0}}>{"\\(\\frac{1}{y} \\cdot \\frac{dy}{dx} = \\ln x + 1 \\)"}</MathJax>
                    <MathJax className={`${styles.p3}`}>{"\\(\\therefore \\frac{dy}{dx} = x^x(\\ln x + 1) \\)"}</MathJax>
               </div>

               <h1 className={styles.title}>Derivative: Logrithmic Functions</h1>
          </div>
     );
}

export default function Differentiation(): Map<string, () => JSX.Element> {
     return new Map<string, () => JSX.Element>([
          ["definitions", definitions],
          ["rules", rules],
          ["non-polynomials", non_polynomials]
     ])
}
