import { useContext } from "react";
import "./css/home.css"
import { HeaderClassContext } from "./root";

export default function Home() {
     const {setHeaderClass} = useContext(HeaderClassContext) as HeaderClassContext;

     return (
          <div id="home" onLoad={() => setHeaderClass("headerIn")}>
               <h1>
                    Pure mathematics is, in its way, the poetry of logical ideas. — Albert Einstein
               </h1>
          </div>
     )
}