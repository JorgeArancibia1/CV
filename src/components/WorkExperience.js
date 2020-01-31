import React from 'react';
import Model from './Model';

const WorkExperience = props => {
  return (
    <div className="ml-md-2 ml-lg-4 ml-xl-4">
      <Model { ...props.data.info[5]}  />
    </div>
  )
}

export default WorkExperience;