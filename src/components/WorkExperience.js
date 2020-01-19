import React from 'react'
import Model from './Model';


function WorkExperience(props) {
  return (
    <>
      <Model { ...props.data.info[5]}  />
    </>
  )
}

export default WorkExperience;