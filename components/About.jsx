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
        I&apos;m a self-taught web developer with a great passion for learning
        something new every day. This, along with the combination of creativity,
        logic, and technology has sparked my interest in this field. I&apos;m
        someone with strong attention to detail, organization, and time
        management skills, who&apos;s able to work independently and
        collaboratively
      </p>
      <p lang='es' className='text-xl text-white text-center w-3/5 mx-auto'>
        Soy un desarrollador web autodidacta con un gran interés por aprender
        algo nuevo cada día, esto, junto con la combinación de creatividad,
        lógica y tecnología es lo que ha generado mi gusto por este campo. Soy
        una persona con buena atención al detalle, organización y buen manejo
        del tiempo, capaz de trabajar tanto independientemente como en equipo
      </p>
    </div>
  );
};

export default About;
