import React from 'react'
import Model from './Model';

const PersonalData = props => {
  return (
    <div className="mt-5">
      <Model { ...props.data.info[0] }  />
    </div>
  )
}

export default PersonalData;
