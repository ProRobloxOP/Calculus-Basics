import {
     JSX
} from "react"

import {
     MathJax,
} from "better-react-mathjax"

import avRateOfChangePng from "../../assets/images/topics/differentiation/avRateOfChange.png"
import secantToTangentPng from "../../assets/images/topics/differentiation/secantToTangent.png"
import "../../index.d.ts"

import "../css/topics/differentiation.css"

function definitions(): JSX.Element {
     return (
          <div id="differentiation">
               <div style={{width:"100%"}}>
                    <h1 className="title">Derivative: Limit Definition</h1>
                    <div className="section" style={{display:"flex", alignItems: "center"}}>
                         <div style={{marginRight:"3%", marginLeft: "3%"}}>
                              <img src={avRateOfChangePng}></img>
                              <p style={{margin: "0%"}}>Source: cuemath.com</p>
                         </div>
                         <div>
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
                         <img src={secantToTangentPng}></img>
                         <p>Source: dibgerge.com</p>
                    </div>

                    <h1 className="title">Common Single Variable Derivative Notations</h1>
                    <div className="section">
                         <MathJax className="p1">{"\\(f'(x), \\quad \\frac{d}{dx}f(x), \\quad \\frac{df}{dx}(a), \\quad \\frac{dy}{dx}, \\quad \\frac{d^2y}{dx^2}\\)"}</MathJax>
                         <MathJax className="p1">{`\\(f'(x)\\) is read as "\\(f\\) prime of \\(x\\)", and \\(f''(x)\\) is "\\(f\\) double prime of \\(x\\)".`}</MathJax>
                         <MathJax className="p1">{`\\(\\frac{dy}{dx}\\) is pronounced "The derivative of \\(y\\) with respect to \\(x\\)".`}</MathJax>
                    </div>
                    
                    <div className="section">
                         <h1 className="title">Derivative: Infinitesimal Definition</h1>
                         <MathJax className="p1">{"Let \\(dx\\) be an infintesimal distance (\\(\\frac{1}{1+1+\\cdots+1}\\)) on the \\(x\\)-axis."}</MathJax>
                         <MathJax className="p1">{"Then where the st (standard part) function rounds of \\(dx\\) (or any other hyperreal),"}</MathJax>
                         <MathJax className="p1">{"\\(f'(x) =\\) st\\((\\frac{f(x + dx) - f(x)}{dx})\\)"}</MathJax>
                    </div>
               </div>
          </div>
     )
}

function rules(): JSX.Element {
     return (
          <div id="differentiation">

          </div>
     )
}

export default function Differentiation(): Map<string, () => JSX.Element> {
     return new Map<string, () => JSX.Element>([
          ["definitions", definitions],
          ["rules", rules],
     ])
}
