import React from 'react';
import Model from './Model';

const Certifications = props => {
  return (
    <>
      <Model {...props.data.info[6]}  />
    </>
  )
}

export default Certifications;