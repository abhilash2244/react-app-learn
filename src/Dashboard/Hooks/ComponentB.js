import React, { useContext } from 'react'
import {hookDemo} from'./UseContext'

export default function ComponentB() {
const salary = useContext(hookDemo)
  return (
    <div>
    <p>I am from component B</p>
    <p>my salary - {salary}</p>
    </div>
  )
}
