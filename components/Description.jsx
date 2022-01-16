import React from 'react';
import Image from 'next/image';
import About from './About';
import Technologies from './Technologies';

const Description = () => {
  return (
    <div className='space-y-20'>
      <About />
      <Technologies />
    </div>
  );
};

export default Description;
