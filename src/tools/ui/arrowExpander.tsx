import {
     Dispatch,
     JSX,
     SetStateAction,
     useState,
} from "react"

type activeTypes = "up" | "down" | "left" | "right"

interface ArrowExpanderProps {
     activeType: activeTypes,
     inactiveType: activeTypes,

     activeCallback: () => void,
     inactiveCallback? : () => void,
}

const arrowUnicodes = {
     ["up"] : "▲",
     ["down"] : "▼",
     ["right"] : "▶",
     ["left"] : "◀"
}

class ArrowExpanderClass {
     private activeStr: string;
     private inactiveStr: string;

     private activated: () => void;
     private inActivated?: () => void;

     private active: boolean;
     private setActive: Dispatch<SetStateAction<boolean>>;

     constructor({activeType, inactiveType, activeCallback, inactiveCallback}: ArrowExpanderProps) {
          this.activeStr = arrowUnicodes[activeType];
          this.inactiveStr = arrowUnicodes[inactiveType];
          
          this.activated = activeCallback;
          this.inActivated = inactiveCallback;

          [this.active, this.setActive] = useState(false);
     }

     public getActive() : boolean {
          return this.active;
     }

     public toggle(stateSetter: Dispatch<SetStateAction<string>>) : void {
          stateSetter((this.active)? this.unActivate() : this.activate());
     }

     private activate() : string {
          this.activated();
          this.setActive(true);

          return this.activeStr;
     }

     private unActivate() : string {
          if (this.inActivated) { this.inActivated(); }
          this.setActive(false);

          return this.inactiveStr;
     }
}

export function ArrowExpander({activeType, inactiveType, activeCallback, inactiveCallback}: ArrowExpanderProps) : JSX.Element {
     const arrow: ArrowExpanderClass = new ArrowExpanderClass({
          ["activeType"]: activeType,
          ["inactiveType"]: inactiveType,
          ["activeCallback"]: activeCallback,
          ["inactiveCallback"]: inactiveCallback,
     });

     const [arrowState, setState] = useState(arrowUnicodes[inactiveType]);

     return (
          <p style={{cursor: "pointer"}}
               onClick={() => {
                    arrow.toggle(setState);
               }}
          >
               {arrowState}
          </p>
     )
}
