import { useState } from "react";
import "./Accordance.css";

function Myaccordion({ question, answer }) {
  let [show, setshow] = useState(false);
  let click = () => {
    setshow(!show);
  };

  return (
    <>
      <div className="content">
        <div className="ques">
        <button onClick={click}> {show ? "-" : "+"}</button>
        <h4> {question}</h4>
        </div>
        <div className="">{show && <p>{answer}</p>}</div>
      </div>
    </>
  );
}

export default Myaccordion;
