import React from 'react';
import Model from './Model';

const Presentation = props => {
  return (
    <>
      <Model { ...props.data.info[3]}  />
    </>
  )
}

export default Presentation;