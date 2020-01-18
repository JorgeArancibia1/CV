import React from 'react';
import avatar from '../images/me.png';

const Header = () => {
  return (
    <section className="container-fluid">
      <div className="row border pt-3 pb-2">
        <img className="mx-auto border rounded-circle p-1 bg-secondary col-5 col-sm-3 col-md-3 col-lg-3 col-xl-2" src={avatar} alt="Avatar de presentación"  />
      </div>
        
    </section>
  )
}

export default Header
