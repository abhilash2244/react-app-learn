import React, { createContext, useState } from 'react'
import ComponentA from './ComponentA'

export const nameContext = React.createContext(); 

export const hookDemo =createContext()
export default function UseContext() {
const [salary, SetSalary] = useState(25000)
  return (
    <div>
        <h4> UseContext</h4>
        <nameContext.Provider value={"hello world"}>
        <hookDemo.Provider value={25000}>
            <ComponentA />
        </hookDemo.Provider>
        </nameContext.Provider>
    </div>
  )
}
