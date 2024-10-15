import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

export default function UseCallback() {
  const [age, SetAge] = useState(25);
  const [salary, SetSalary] = useState(25000);
  // Normal rendering
  // const incrementAge = ()=>{
  //     SetAge(age+1)
  // }
  // const incrementSalary = ()=>{
  //     SetSalary(salary+1)
  // }
  // usecallback rendering
  const incrementAge = useCallback(() => {
    SetAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    SetSalary(salary + 1);
  }, [salary]);
  return (
    <div>
      <h4>UseCallback</h4>
      <p>
        The useCallback hook in React.js is used to memoize callbacks in
        functional components. It's particularly useful when passing callbacks
        to child components, preventing unnecessary re-renders of those
        components. Here's how you can use the useCallback hook:
      </p>
      <p>
        When we are updating a value in component which is loaded on the UI the
        other components will also be rendered. This will cause performance
        issue when we have more components. Inorder to overcome that issue we
        will use Callback Hook
      </p>
      <span>
        it is useful when passing callbacks to optimised child components that
        rely on reference equality to prevent unnecessary renders.{" "}
      </span>
      <p>
        Callback parameter caches the value and returns the value if it's not
        updated and this prevents unnecessary renders
      </p>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}
