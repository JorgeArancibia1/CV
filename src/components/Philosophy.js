import React from 'react';
import Model from './Model';

const Philosophy = props => {
  return (
    <div className="mnl mt-5">
      <Model { ...props.data.info[1]} i  />
    </div>
  )
}

export default Philosophy;