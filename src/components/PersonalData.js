import React from 'react'
import Model from './Model';

const PersonalData = props => {
  return (
    <div className="mt-5 ml-md-2 ml-lg-4 ml-xl-4">
      <Model { ...props.data.info[0] } i a />
    </div>
  )
}

export default PersonalData;
