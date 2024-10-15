import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log("component is mounted")
    return ()=>{
        console.log("component is unmounted")
    }
  },[count])

  return (
    <div>
      <h4>Use Effect</h4>
      <p>The useEffect hook in React.js allows you to perform side effects in functional components. Side effects can include things like data fetching, subscriptions, or manually changing the DOM.</p>
        {count}
      <button className="btn btn-primary" type="button" onClick={()=>setCount(count +1)}>
        Change model
      </button>
    </div>
  );
}
