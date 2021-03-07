import React from 'react';
import Facebook from '../../assets/images/facebook.png';
import Twitter from '../../assets/images/twitter.png';
import Instagram from '../../assets/images/instagram.png';
import './styles.css';

const Contact: React.FC = () => {
  return (
    <ul className="sci">
      <li><a href="!#"><img src={Facebook} alt="facebook"/></a></li>
      <li><a href="!#"><img src={Twitter} alt="twitter"/></a></li>
      <li><a href="!#"><img src={Instagram} alt="instagram"/></a></li>
    </ul>
  )
}

export default Contact;