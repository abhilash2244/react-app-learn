import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [countOne, SetCountOne] = useState(0)
    const [countTwo, SetCountTwo] = useState(0)

    const incrementOne = ()=>{
        SetCountOne(countOne + 1)
    }
    const incrementTwo = () =>{
        SetCountTwo(countTwo + 1)
    }
    
    const isEven =useMemo(()=>{
        let i = 0
        while(i< 200000000) i++
        return countOne % 2 ==0
    },[countOne])
        
    

  return (
    <div>
       <h4>UseMemo</h4>
       <p>The useMemo hook in React.js is used to memoize the result of expensive calculations within functional components. It helps optimize performance by caching the result of a computation and returning the cached value when the dependencies have not changed.</p>
       <p>Use memo is used for performance optimization. When variable one is taking more time to compute and when variable two actual calcutation time is less but the component will be rendered and variable one also renders. This will cause the performance issue. </p>
        <button className="btn btn-primary" onClick={incrementOne}> Increment One {countOne}</button><span>{isEven? ' Even' : ' Odd'}</span>
        <br></br>
        <button className="btn btn-primary" onClick={incrementTwo}> Increment Two {countTwo}</button>

    </div>
  )
}
