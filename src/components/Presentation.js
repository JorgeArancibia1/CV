import React from 'react'
import Model from './Model';


function Presentation(props) {
  return (
    <>
      <Model { ...props.data.info[3]}  />
    </>
  )
}

export default Presentation;