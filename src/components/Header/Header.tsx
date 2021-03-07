import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import Logo from '../../assets/images/logo.png';
import './styles.css';

const Header: React.FC = () => {
  const [active, setActive] = useState(false);


  return (
    <header>
      <a href="!#">
        <img className="logo" src={Logo} alt="logo" />
      </a>
      <a href="!#" onClick={() => setActive(!active)}>
        {!active ? (
          <AiOutlineMenu
          className="menu"
        />
        ) : (
          <GrClose className="menu" />
        )}
      </a>


      <ul className={active ? 'navigation' : ''}>
        <li><a href="!#">Home</a></li>
        <li><a href="!#">Menu</a></li>
        <li><a href="!#">What´s New</a></li>
        <li><a href="!#">Contact</a></li>
      </ul>


    </header>
  )
}

export default Header;