import React, { useState } from 'react';
import ProjectItem from './ProjectItem';

const Projects = () => {
  const [projectNumber, setProjectNumber] = useState(0);

  const rightArrowHandler = () => {
    setProjectNumber((prev) => {
      if (prev === 2) {
        return 0;
      }
      return prev + 1;
    });
  };

  const leftArrowHandler = () => {
    setProjectNumber((prev) => {
      if (prev === 0) {
        return 2;
      }
      return prev - 1;
    });
  };

  return (
    <div className='mt-6 pt-20' id='projects'>
      <h1 lang='en' className='text-5xl font-bold text-blue-600 text-center'>
        Projects
      </h1>
      <h1 lang='es' className='text-5xl font-bold text-blue-600 text-center'>
        Proyectos
      </h1>
      <span className='flex items-center gap-x-4 ml-36 mt-14'>
        <button
          type='button'
          onClick={leftArrowHandler}
          className='text-white bg-zinc-700 p-3 hover:bg-zinc-600'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M10 19l-7-7m0 0l7-7m-7 7h18'
            />
          </svg>
        </button>
        <h3 className='text-xl text-white'>0{projectNumber + 1}/03</h3>
        <button
          type='button'
          onClick={rightArrowHandler}
          className='text-white bg-zinc-700 p-3 hover:bg-zinc-600'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M14 5l7 7m0 0l-7 7m7-7H3'
            />
          </svg>
        </button>
      </span>
      <ProjectItem projectNumber={projectNumber} />
    </div>
  );
};

export default Projects;
