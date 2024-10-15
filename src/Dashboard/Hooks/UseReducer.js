import React, { useReducer } from 'react'

const initialState =0;
const reducer = (state,action) =>{
    switch (action) {
        case 'increment':
            return state +1 
        case 'decrement':
            return state -1  
        case 'reset':
            return initialState 
            
        default:
            return state;
    }
}
function UseReducer() {

    const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <h4>
            UseReducer
        </h4>
        <p>Count value = {count}</p><br></br>
        <button className='btn btn-primary' onClick={()=>dispatch('increment')}>Increment</button>
        <button className='btn btn-primary' onClick={()=>dispatch('decrement')}>Decrement</button>
        <button className='btn btn-primary' onClick={()=>dispatch('reset')}>Reset</button>

    </div>
  )
}

export default UseReducer