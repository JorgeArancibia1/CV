import React from 'react';
import CertificationsModel from './CertificationsModel';

const Certifications = props => {
  return (
    <div className="d-flex flex-sm-nowrap flex-md-nowrap flex-lg-nowrap certificationBox">
      <CertificationsModel {...props.data.info[6]}/>
      <CertificationsModel {...props.data.info[7]} space />
    </div>
  )
}

export default Certifications;