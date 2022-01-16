import React from 'react';
import Image from 'next/image';
import aboutImage from '../public/about-image.png';

const About = () => {
  return (
    <div className='space-y-10'>
      <div className='flex justify-center relative' style={{ height: 400 }}>
        <Image
          src={aboutImage}
          alt='man working'
          width={900}
          quality={100}
          objectFit='cover'
          layout='intrinsic'
          objectPosition='80px'
        />
      </div>
      <h1 lang='en' className='text-5xl font-bold text-blue-600 text-center'>
        About
      </h1>
      <h1 lang='es' className='text-5xl font-bold text-blue-600 text-center'>
        Acerca
      </h1>
      <p lang='en' className='text-xl text-white text-center w-3/5 mx-auto'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        aliquid ab cum eum. Quos impedit maiores, a animi autem nam expedita
        quidem sapiente provident vero nisi. Totam quo numquam eos architecto
        eaque.
      </p>
      <p lang='es' className='text-xl text-white text-center w-3/5 mx-auto'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        aliquid ab cum eum. Quos impedit maiores, a animi autem nam expedita
        quidem sapiente provident vero nisi. Totam quo numquam eos architecto
        eaque.
      </p>
    </div>
  );
};

export default About;
