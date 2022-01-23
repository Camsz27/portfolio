import React from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai/index';

const Header = () => {
  const languageHandler = () => {
    const spanishElements = document.querySelectorAll('[lang=es]');
    const englishElements = document.querySelectorAll('[lang=en]');
    [...spanishElements].map((element) => element.classList.toggle('hidden'));
    [...englishElements].map((element) => element.classList.toggle('hidden'));
  };

  return (
    <div className='w-full flex justify-center'>
      <nav className='md:fixed bg-zinc-800 md:w-full flex text-white py-4 items-center justify-center md:gap-x-12 z-20 flex-wrap'>
        <div className='hidden md:flex gap-x-12'>
          <Link href={'#about'} passHref>
            <h3
              lang='en'
              className='cursor-pointer hover:text-blue-600 hover:scale-110 hover:font-bold'
            >
              About
            </h3>
          </Link>
          <Link href={'#about'} passHref>
            <h3
              lang='es'
              className='cursor-pointer hover:text-blue-600 hover:scale-110 hover:font-bold'
            >
              Acerca
            </h3>
          </Link>
          <Link href={'#projects'} passHref>
            <h3
              lang='en'
              className='cursor-pointer hover:text-blue-600 hover:scale-110 hover:font-bold'
            >
              Projects
            </h3>
          </Link>
          <Link href={'#projects'} passHref>
            <h3
              lang='es'
              className='cursor-pointer hover:text-blue-600 hover:scale-110 hover:font-bold'
            >
              Proyectos
            </h3>
          </Link>
          <Link href={'#contact'} passHref>
            <h3
              lang='en'
              className='cursor-pointer hover:text-blue-600 hover:scale-110 hover:font-bold'
            >
              Contact
            </h3>
          </Link>
          <Link href={'#contact'} passHref>
            <h3
              lang='es'
              className='cursor-pointer hover:text-blue-600 hover:scale-110 hover:font-bold'
            >
              Contacto
            </h3>
          </Link>
        </div>
        <a
          href='https://github.com/Camsz27'
          target='_blank'
          rel='noreferrer'
          className='w-20 md:w-auto'
        >
          <AiFillGithub className='w-6 h-6 md:w-8 md:h-8 hover:scale-125' />
        </a>
        <a
          href='https://www.linkedin.com/in/camilo-guevara/'
          target='_blank'
          rel='noreferrer'
          className='w-20 md:w-auto'
        >
          <AiFillLinkedin className='w-6 h-6 md:w-8 md:h-8 hover:scale-125' />
        </a>
        <div className='flex items-center justify-center text-sm md:text-base w-20 md:w-auto'>
          <h3 lang='en' className='mr-2'>
            English
          </h3>
          <h3 lang='es' className='mr-2'>
            Inglés
          </h3>
          <label htmlFor='toogle' className='flex items-center cursor-pointer'>
            <div className='relative'>
              <input
                id='toogle'
                type='checkbox'
                className='sr-only'
                onClick={languageHandler}
              />
              <div className='w-10 h-4 bg-gray-400 rounded-full shadow-inner'></div>
              <div className='dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition'></div>
            </div>
            <div className='ml-3 text-gray-700 font-medium'></div>
          </label>
          <h3 lang='en'>Spanish</h3>
          <h3 lang='es'>Español</h3>
        </div>
      </nav>
    </div>
  );
};

export default Header;
