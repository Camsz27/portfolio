import React, { useState, useEffect } from 'react';
import { projects } from '../data/projectData';
import Image from 'next/image';

const ProjectItem = ({ projectNumber }) => {
  const [project, setProject] = useState(projects[projectNumber]);

  useEffect(() => {
    setProject(projects[projectNumber]);
  }, [projectNumber]);

  return (
    <div className='flex w-5/6 mx-auto items-center mt-3'>
      <div className='w-1/2 flex flex-col gap-y-6 justify-center'>
        <h1 lang='en' className='text-orange-600 font-semibold text-3xl'>
          {project.nameEng}
        </h1>
        <h1 lang='es' className='text-orange-600 font-semibold text-3xl'>
          {project.nameEsp}
        </h1>
        <p lang='en' className='text-white text-xl mr-20'>
          {project.descriptionEng}
        </p>
        <p lang='es' className='text-white text-xl mr-20'>
          {project.descriptionEsp}
        </p>
        <span className='flex gap-x-7'>
          <a
            lang='en'
            href={project.demoLink}
            target='_blank'
            rel='noreferrer'
            className='text-white bg-orange-600 hover:bg-orange-500 text-xl px-5 py-2'
          >
            View Project
          </a>
          <a
            lang='es'
            href={project.demoLink}
            target='_blank'
            rel='noreferrer'
            className='text-white bg-orange-600 hover:bg-orange-500 text-xl px-5 py-2'
          >
            Ver Proyecto
          </a>
          <a
            lang='en'
            href={project.repoLink}
            target='_blank'
            rel='noreferrer'
            className='text-white bg-orange-600 hover:bg-orange-500 text-xl px-5 py-2'
          >
            View Repository
          </a>
          <a
            lang='es'
            href={project.repoLink}
            target='_blank'
            rel='noreferrer'
            className='text-white bg-orange-600 hover:bg-orange-500 text-xl px-5 py-2'
          >
            Ver Repositorio
          </a>
        </span>
      </div>
      <div className='w-1/2 relative top-12' style={{ height: 500 }}>
        <Image
          src={project.image}
          alt={project.nameEng}
          quality={100}
          width={1000}
          height={550}
          objectFit='cover'
          layout='intrinsic'
        />
      </div>
    </div>
  );
};

export default ProjectItem;
