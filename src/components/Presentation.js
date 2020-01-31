import React from 'react';
import Model from './Model';

const Presentation = props => {
  return (
    <div className="ml-md-2 ml-lg-4 ml-xl-4">
      <Model { ...props.data.info[3] } />
    </div>
  )
}

export default Presentation;