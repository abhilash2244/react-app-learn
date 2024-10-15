import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../ReduxStore/Counter'

function ReduxModule() {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
  return (
    <div>
              <div>
              <h1> The count is: {count}</h1>

        <button className='btn btn-primary'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button className='btn btn-primary'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>

    </div>
  )
}

export default ReduxModule