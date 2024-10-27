import React from 'react'
import Welcome from './welcome'

const HelloWorld = ({MyNumber, nameUser}:any) => {
  return (
    <>  
      <div>HelloWorld</div>
      <div>Hello {MyNumber}</div>
      <Welcome name={nameUser} />
    </>
  )
}

export default HelloWorld
