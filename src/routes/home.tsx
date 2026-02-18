import "./css/home.css"

export default function Home() {
     const header = document.getElementById("header");
     if (header != null){ header.className="headerIn"; }

     return (
          <div id="home">
               <h1>
                    Pure mathematics is, in its way, the poetry of logical ideas. — Albert Einstein
               </h1>
          </div>
     )
}