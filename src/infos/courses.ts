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
                    ["name"] : "Differentiation",
                    ["subtopics"] : [
                         {["name"] : "Definitions"},
                         {["name"] : "Rules"},
                         {["name"] : "Applications"},
                    ],
               },
               {
                    ["name"] : "Integration",
                    ["subtopics"] : [
                         {["name"] : "Definitions"},
                         {["name"] : "Proofs"},
                         {["name"] : "Rules"},
                         {["name"] : "Applications"},
                    ],
               }
          ],
     }
] as const

export function getCourses() : calculusLevel[] {
     return courses;
}
