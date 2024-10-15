import React, { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const [timer, setTimer] = useState(0);
  const inputRef = useRef(null);
  const intervalRef = useRef();
  useEffect(() => {
    // example one
    inputRef.current.focus();

    // example 2
    // const interval = setInterval(()=>{
    //     setTimer(prevTimer => prevTimer +1)
    // },1000)
    // return () => { clearInterval(interval)}

    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h4>UseRef</h4>
      <p>This is used to access dom nodes directly in functional component</p>
      <p>
        In the below example we have focused on the input element when the page
        in mounted
      </p>
      <input type="text" ref={inputRef} style={{border:"1px solid black"}}></input><br />

      <h5>Below is the second example for use ref hook. Using the use ref hoook we will be able to ge the reference of a block scoped variable and clear the inteval</h5>
      Hook timer - {timer}

      <button className="btn btn-primary" onClick={() => clearInterval(intervalRef.current)}>Click to stop interval</button>
    </div>
  );
}
