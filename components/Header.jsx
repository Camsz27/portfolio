import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai/index';

const Header = () => {
  const languageHandler = () => {
    const spanishElements = document.querySelectorAll('[lang=es]');
    const englishElements = document.querySelectorAll('[lang=en]');
    [...spanishElements].map((element) => element.classList.toggle('hidden'));
    [...englishElements].map((element) => element.classList.toggle('hidden'));
  };

  return (
    <nav className='fixed bg-zinc-800 w-full flex text-white py-4 items-center justify-center gap-x-12 z-20'>
      <h3 lang='en'>About</h3>
      <h3 lang='es'>Acerca</h3>
      <h3 lang='en'>Projects</h3>
      <h3 lang='es'>Proyectos</h3>
      <h3 lang='en'>Contact</h3>
      <h3 lang='es'>Contacto</h3>
      <a href='https://github.com/Camsz27' target='_blank' rel='noreferrer'>
        <AiFillGithub className='w-8 h-8' />
      </a>
      <a
        href='https://www.linkedin.com/in/camilo-guevara/'
        target='_blank'
        rel='noreferrer'
      >
        <AiFillLinkedin className='w-8 h-8' />
      </a>
      <div className='flex items-center justify-center'>
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
  );
};

export default Header;
