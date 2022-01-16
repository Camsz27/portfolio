import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div>
      <Image
        src={'/about-image.png'}
        width={900}
        height={600}
        alt='man working'
        quality={100}
      />
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        aliquid ab cum eum. Quos impedit maiores, a animi autem nam expedita
        quidem sapiente provident vero nisi. Totam quo numquam eos architecto
        eaque.
      </p>
    </div>
  );
};

export default About;
