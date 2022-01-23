import React from 'react';
import {
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiHeroku,
  SiMongodb,
} from 'react-icons/si';
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNode,
  FaPython,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';

const Technologies = () => {
  return (
    <div className='space-y-14'>
      <h1
        lang='en'
        className='text-4xl md:text-5xl font-bold text-blue-600 text-center'
      >
        Technologies
      </h1>
      <h1
        lang='es'
        className='text-4xl md:text-5xl font-bold text-blue-600 text-center'
      >
        Technologías
      </h1>
      <div className='flex w-5/6 md:w-1/3 mx-auto justify-center gap-x-12 gap-y-7 flex-wrap'>
        <FaHtml5 className='w-10 h-10 md:w-14 md:h-14 fill-orange-600' />
        <FaCss3 className='w-10 h-10 md:w-14 md:h-14 fill-blue-500' />
        <SiJavascript className='w-10 h-10 md:w-14 md:h-14 fill-yellow-400' />
        <FaNode className='w-10 h-10 md:w-14 md:h-14 fill-green-600' />
        <FaPython className='w-10 h-10 md:w-14 md:h-14 fill-yellow-400' />
        <SiTypescript className='w-10 h-10 md:w-14 md:h-14 fill-blue-500' />
        <SiTailwindcss className='w-10 h-10 md:w-14 md:h-14 fill-blue-500' />
        <FaGitAlt className='w-10 h-10 md:w-14 md:h-14 fill-orange-600' />
        <SiNextdotjs className='w-10 h-10 md:w-14 md:h-14 fill-white' />
        <SiHeroku className='w-10 h-10 md:w-14 md:h-14 fill-purple-500' />
        <FaGithub className='w-10 h-10 md:w-14 md:h-14 fill-white' />
        <SiMongodb className='w-10 h-10 md:w-14 md:h-14 fill-green-600' />
        <FaReact className='w-10 h-10 md:w-14 md:h-14 fill-blue-500' />
        <SiExpress className='w-10 h-10 md:w-14 md:h-14 fill-white' />
      </div>
    </div>
  );
};

export default Technologies;
