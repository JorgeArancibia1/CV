import React from 'react'
import Model from './Model';


function ProfesionalStudies(props) {
  return (
    <>
      <Model { ...props.data.info[4]}  />
    </>
  )
}

export default ProfesionalStudies;