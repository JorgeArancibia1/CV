import React from 'react';
import Model from './Model';

const Contact = props => {
  return (
    <>
      <Model { ...props.data.info[1]}  />
    </>
  )
}

export default Contact;