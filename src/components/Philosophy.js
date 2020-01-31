import React from 'react';
import Model from './Model';

const Philosophy = props => {
  return (
    <div className="mnl mt-md-5 mt-lg-5 mt-xl-5">
      <Model { ...props.data.info[1]} i  />
    </div>
  )
}

export default Philosophy;