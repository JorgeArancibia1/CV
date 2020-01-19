import React from 'react';
import Model from './Model';

const Skills = props => {
  return (
    <>
      <Model { ...props.data.info[2]}  />
    </>
  )
}

export default Skills;