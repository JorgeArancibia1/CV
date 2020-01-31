import React from 'react';
import Model from './Model';

const Skills = props => {
  return (
    <div className="mnl">
      <Model { ...props.data.info[2] } />
    </div>
  )
}

export default Skills;