import React from 'react';
import Header from '../Header/Header';
import Information from '../Information/Information';

import Contact from '../Contact/Contact';
import './styles.css';

const Container: React.FC = () => {
  return (
    <main>
      <Header />
      <Information />
      <Contact />
    </main>
  )
}

export default Container;