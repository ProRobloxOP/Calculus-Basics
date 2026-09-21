export type calculusLevel = {
     number : number;
     topics : topic[];
}

export type topic = {
     name : string;
     subtopics : subtopic[];
}

export type subtopic = {
     name : string
}

const courses : calculusLevel[] = [
     {
          ["number"] : 1,
          ["topics"] : [
               {
                    ["name"] : "Limits",
                    ["subtopics"] : [
                         {["name"] : "Definitions"},
                         {["name"] : "Solutions of A Limit"},
                         {["name"] : "Composite Functions"},
                    ],
               },
               {
                    ["name"] : "Differentiation",
                    ["subtopics"] : [
                         {["name"] : "Definitions"},
                         {["name"] : "Rules"},
                         {["name"] : "Non-Polynomials"},
                         {["name"] : "Proofs"},
                         {["name"] : "Applications"},
                    ],
               },
               {
                    ["name"] : "Integration",
                    ["subtopics"] : [
                         {["name"] : "Definitions"},
                         {["name"] : "Rules"},
                         {["name"] : "Non-Polynomials"},
                         {["name"] : "Proofs"},
                         {["name"] : "Applications"},
                    ],
               }
          ],
     }
] as const

export function getCourses() : calculusLevel[] {
     return courses;
}
