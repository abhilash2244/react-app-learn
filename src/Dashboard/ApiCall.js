import React, { useEffect } from 'react'
import { UseFetch } from '../Service/UseFetch';

function ApiCall() {

// const {get} = UseFetch.get()
    useEffect(()=>{
        console.log("called and inside the effect");
        // console.log(get)
        // get()
    },[])
  return (
    <div>ApiCall</div>
  )
}

export default ApiCall