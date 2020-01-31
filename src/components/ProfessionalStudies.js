import React from 'react';
import Model from './Model';

const ProfesionalStudies = props => {
  return (
    <div className="mnl">
      <Model { ...props.data.info[4] } />
    </div>
  )
}

export default ProfesionalStudies;