import {
     JSX
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

import "../css/topics/differentiation.css"

function definitions(): JSX.Element {
     return (
          <div id="differentiation">
               <h1 className="title">Derivative: Limit Definition</h1>
               <div className="section" style={{display:"flex", alignItems: "center"}}>
                    <div style={{marginRight:"3%", marginLeft: "3%", width: "40%"}}>
                         <img src={avRateOfChangePng} style={{width: "100%", height: "auto"}}></img>
                         <p className="caption" style={{margin: "0%"}}>Source: cuemath.com</p>
                    </div>
                    <div style={{width: "50%"}}>
                         <MathJax className="p0">{
                              "The average rate of change for any function \\(f(x)\\) and a step \\(h\\) (\\(\\Delta x\\)) can be represented as:"
                         }</MathJax>
                         <MathJax className="p0">{"\\(c(x) = \\frac{\\Delta y}{\\Delta x} = \\frac{f(x+ \\Delta x) - f(x)}{\\Delta x} = \\frac{f(x+h) - f(x)}{h} \\)"}</MathJax>
                         <MathJax className="p0">{
                              "And a secant line between \\(x_0\\) and \\(x_1\\) can be written as:"                    
                         }</MathJax>
                         <MathJax className="p0">{"\\(s(x) = (x-x_0)\\frac{f(x_1)-f(x_0)}{x_1-x_0}+f(x_0) \\qquad [h=x_1-x_0]\\)"}</MathJax>
                    </div>
               </div>
               <div className="section">
                    <MathJax className="p1">{"Therefore when \\(h \\to 0\\), the limit definition of a derivative (instantaneous change) is:"}</MathJax>
                    <MathJax className="p1">{"\\(f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} \\)"}</MathJax>
                    <MathJax className="p1">{
                         "Which graphically forms a tangent line around \\(x_0\\), as the second point (\\(x_1\\)) in the secant line approaches \\(x_0\\)."
                    }</MathJax>
                    <img src={secantToTangentPng} style={{width: "30%", height: "auto"}}></img>
                    <p className="caption">Source: dibgerge.com</p>
               </div>

               <h1 className="title">Common Single Variable Derivative Notations</h1>
               <div className="section">
                    <MathJax className="p1">{"\\(f'(x), \\quad \\frac{d}{dx}f(x), \\quad \\frac{df}{dx}(a), \\quad \\frac{dy}{dx}, \\quad \\frac{d^2y}{dx^2}\\)"}</MathJax>
                    <MathJax className="p1">{`\\(f'(x)\\) is read as "\\(f\\) prime of \\(x\\)", and \\(f''(x)\\) is "\\(f\\) double prime of \\(x\\)".`}</MathJax>
                    <MathJax className="p1">{`\\(\\frac{dy}{dx}\\) is pronounced "The derivative of \\(y\\) with respect to \\(x\\)".`}</MathJax>
               </div>
               
               <h1 className="title">Derivative: Infinitesimal Definition</h1>
               <div className="section">
                    <MathJax className="p1">{"Let \\(dx\\) be an infintesimal distance (\\(\\frac{1}{1+1+\\cdots+1}\\)) on the \\(x\\)-axis."}</MathJax>
                    <MathJax className="p1">{"Then where the st (standard part) function rounds of \\(dx\\) (or any other hyperreal),"}</MathJax>
                    <MathJax className="p1">{"\\(f'(x) =\\) st\\((\\frac{f(x + dx) - f(x)}{dx})\\)"}</MathJax>
               </div>

               <h1 className="title">Resources: Definition of a Derivative</h1>
               <div className="section">
                    <iframe  src="https://www.youtube.com/embed/PGK-RXA8Ye8" title="The definition of a derivative" style={{border: "none", width: "80vw", height: "80vh"}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
               </div>
          </div>
     )
}

function rules(): JSX.Element {
     return (
          <div id="differentiation">
               <h1 className="title">Derivative: Differentiability</h1>
               <div className="section">
                    <MathJax className="p1">{"All functions are not differentiable throughout; a function at a \\(x\\)-coordinate (\\(a\\)) has a derivative if:"}</MathJax>
                    <ol type="1" className="p1" style={{display: "inline-block", textAlign: "justify"}}>
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
                         <p className="title" style={{left: "25%", display: "flex"}}> ▲ </p>
                         <h1 className="title" style={{width: "100%"}}>Graphical Illustration</h1>
                    </div>
                    <div className="p2 section">
                         <div>
                              <MathJax style={{margin: "3%"}}>{
                                   "1) \\(f(x)=\\begin{cases}" +
                                   "x+2, & x \\le 0 \\\\" +
                                   "x, & x > 0" +
                                   "\\end{cases}\\)"
                              }</MathJax>
                              <img className=".img_lightborder" src={peicewise_1_derivativePng} style={{width: "80%", height: "auto"}}/>
                              <MathJax className="caption">{"Since \\(f(x)\\) is discontinuous when \\(x=0\\), its derivative has an open circle at \\((0,1)\\)."}</MathJax>
                         </div>
                         <div>
                              <MathJax style={{margin: "3%"}}>{
                                   "2) \\(f(x)=|x|\\)"
                              }</MathJax>
                              <img className=".img_lightborder" src={abs_x_derivativePng} style={{width: "80%", height: "auto"}}/>
                              <MathJax className="caption">{"Since the derivative of \\(|x|\\) is discontinuous at \\((0, 0)\\), \\(f'(0)\\) is undefined and \\(f(x)\\) is undifferentiable at that point."}</MathJax>
                         </div>
                         <div>
                              <MathJax style={{margin: "3%"}}>{
                                   "3) \\(f(x)=x^\\frac{1}{3}\\)"
                              }</MathJax>
                              <img className=".img_lightborder" src={cubic_root_x_derivativePng} style={{width: "80%", height: "auto"}}/>
                              <MathJax className="caption">{"Although \\(f(x)\\) is continuous and curved, the limit is not finite and the tangent is vertical when \\(x=0\\)."}</MathJax>
                         </div>
                    </div>
               </div>

               <h1 className="title">Derivative: Chain Rule</h1>
          </div>
     )
}

export default function Differentiation(): Map<string, () => JSX.Element> {
     return new Map<string, () => JSX.Element>([
          ["definitions", definitions],
          ["rules", rules],
     ])
}
