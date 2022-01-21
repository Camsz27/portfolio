import React from 'react';

const Contact = () => {
  const formHandler = (e) => {
    e.preventDefault();
    console.log('clicked');
  };

  return (
    <div>
      <h1 lang='en' className='text-5xl font-bold text-blue-600 text-center'>
        Contact
      </h1>
      <h1 lang='es' className='text-5xl font-bold text-blue-600 text-center'>
        Contacto
      </h1>
      <form
        className='w-5/6 mx-auto flex flex-col gap-y-7 pb-32 text-white'
        onSubmit={formHandler}
      >
        <span className='flex flex-col gap-y-2'>
          <label
            lang='en'
            htmlFor='sender'
            className='text-white font-normal text-lg'
          >
            What&apos;s your name
          </label>
          <label
            lang='es'
            htmlFor='sender'
            className='text-white font-normal text-lg'
          >
            Cuál es tu nombre
          </label>
          <input
            type='text'
            id='sender'
            name='sender'
            className='bg-zinc-700 p-2 w-1/3 focus:outline-none focus:border-blue-600 focus:border-2 peer'
            required
          />
        </span>
        <span className='flex flex-col gap-y-2'>
          <label
            lang='en'
            htmlFor='email'
            className='text-white font-normal text-lg'
          >
            Your email
          </label>
          <label
            lang='es'
            htmlFor='email'
            className='text-white font-normal text-lg'
          >
            Tu correo electrónico
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='bg-zinc-700 p-2 w-1/3 focus:outline-none focus:border-blue-600 focus:border-2 peer'
            required
          />
          <p lang='en' className='invisible peer-invalid:visible text-red-400'>
            Please enter a valid email address
          </p>
          <p lang='es' className='invisible peer-invalid:visible text-red-400'>
            Por favor ingresa un correo electrónico valido
          </p>
        </span>
        <span className='flex flex-col gap-y-2'>
          <label
            lang='en'
            htmlFor='subject'
            className='text-white font-normal text-lg'
          >
            Subject
          </label>
          <label
            lang='es'
            htmlFor='subject'
            className='text-white font-normal text-lg'
          >
            Asunto
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            className='bg-zinc-700 p-2 w-1/3 focus:outline-none focus:border-blue-600 focus:border-2'
            required
          />
        </span>
        <span className='flex flex-col gap-y-2'>
          <label
            lang='en'
            htmlFor='message'
            className='text-white font-normal text-lg'
          >
            Message
          </label>
          <label
            lang='es'
            htmlFor='message'
            className='text-white font-normal text-lg'
          >
            Mensaje
          </label>
          <textarea
            name='message'
            id='message'
            className='bg-zinc-700 h-48 resize-none w-1/3 p-2 focus:outline-none focus:border-blue-600 focus:border-2'
            required
          ></textarea>
        </span>
        <button
          lang='en'
          type='submit'
          className='text-white bg-orange-600 hover:bg-orange-500 text-xl px-5 py-4 w-1/5'
        >
          Send Message
        </button>
        <button
          lang='es'
          type='submit'
          className='text-white bg-orange-600 hover:bg-orange-500 text-xl px-5 py-4 w-1/5'
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default Contact;
