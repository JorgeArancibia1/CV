import React from 'react'
import Model from './Model';

const PersonalData = props => {
  return (
    <>
      <Model { ...props.data.info[0] }  />
    </>
  )
}

export default PersonalData;
