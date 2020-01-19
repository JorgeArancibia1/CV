import React from 'react'
import Model from './Model';


function Skills(props) {
  return (
    <>
      <Model { ...props.data.info[2]}  />
    </>
  )
}

export default Skills;