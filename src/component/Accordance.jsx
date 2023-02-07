import Data from "./Data";
import "./Accordance.css";
import { useState } from "react";
import Myaccordion from "./Myaccordion";

function Accordance() {
    let [Item, setItem] = useState(Data);
    return (
        <div className="main">
            <h1>My Accordance</h1>
            {Item.map((e) => {
                return <Myaccordion {...e}  />;
            })}
        </div>
    )


}
export default Accordance;
