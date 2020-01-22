import React from 'react';
import avatar from '../images/me.png';

const Avatar = () => {
  return (
    <section className="container-fluid m-auto p-0">
      <div className="row pt-3 pb-2 mx-auto">
        <div className="avatar d-inline-block rounded-circle mx-auto shadow"></div>
        {/* <img className="mx-auto border rounded-circle p-1 bg-secondary col-5 col-sm-3 col-md-3 col-lg-3 col-xl-2" src={avatar} alt="Avatar de presentación"  /> */}
      </div>
    </section>
  )
}

export default Avatar