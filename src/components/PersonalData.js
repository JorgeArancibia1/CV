import React from 'react'
import Model from './Model';

const PersonalData = props => {
  //console.log("Esto es PersonalData")
  //console.log(props.data.info[0])

  // const { icon, title, item, fechaDeNacimiento, item2, EstadoCivil, item3, Nacionalidad } = props.data.info[0];

  return (
    <>
      <Model { ...props.data.info[0]}  />
    </>
  )
}

export default PersonalData;
