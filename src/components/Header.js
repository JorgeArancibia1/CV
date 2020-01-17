import React from 'react';
import avatar from '../images/me.png';

const Header = () => {
  return (
    <div className="avatar-container">
      <img src={avatar} alt="Avatar de presentación" width="70%" />
    </div>
  )
}

export default Header
