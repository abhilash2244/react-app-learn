import React, { useContext } from 'react'
import ComponentB from './ComponentB'
import { nameContext } from './UseContext'

export default function ComponentA() {
    const name=useContext(nameContext)
  return (
    <div>
       <p>Hello I am component A</p> 
       <p>{name}</p>
       <ComponentB />
    </div>
  )
}
