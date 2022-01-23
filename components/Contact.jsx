import React, { useRef } from 'react';

const Contact = () => {
  const name = useRef();
  const email = useRef();
  const subject = useRef();
  const message = useRef();

  const formHandler = async (e) => {
    e.preventDefault();
    const mail = {
      subject: subject.current.value,
      email: email.current.value,
      name: name.current.value,
      message: message.current.value,
    };
    const request = await fetch('/api/mail', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(mail),
    });
    const response = await request.json();
    console.log(response);
    name.current.value = '';
    email.current.value = '';
    subject.current.value = '';
    message.current.value = '';
  };

  return (
    <div className='-mt-52 sm:-mt-32 md:mt-0' id='contact'>
      <h1
        lang='en'
        className='text-4xl md:text-5xl font-bold text-blue-600 text-center'
      >
        Contact
      </h1>
      <h1
        lang='es'
        className='text-4xl md:text-5xl font-bold text-blue-600 text-center'
      >
        Contacto
      </h1>
      <form
        className='w-5/6 mx-auto flex flex-col gap-y-7 pb-32 text-white mt-10 md:mt-0'
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
            className='bg-zinc-700 p-2 md:w-1/3 focus:outline-none focus:border-blue-600 focus:border-2'
            required
            ref={name}
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
            ref={email}
            className='bg-zinc-700 p-2 md:w-1/3 focus:outline-none focus:border-blue-600 focus:border-2 peer invalid:border-red-400 invalid:border invalid:text-red-500 focus:invalid:border-red-400 focus:invalid:ring-red-400'
          />
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
            className='bg-zinc-700 p-2 md:w-1/3 focus:outline-none focus:border-blue-600 focus:border-2'
            required
            ref={subject}
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
            className='bg-zinc-700 h-48 resize-none md:w-1/3 p-2 focus:outline-none focus:border-blue-600 focus:border-2'
            required
            ref={message}
          ></textarea>
        </span>
        <button
          lang='en'
          type='submit'
          className='text-white bg-orange-600 hover:bg-orange-500 text-xl px-5 py-4 md:w-1/5 mt-4'
        >
          Send Message
        </button>
        <button
          lang='es'
          type='submit'
          className='text-white bg-orange-600 hover:bg-orange-500 text-xl px-5 py-4 md:w-1/5 mt-4'
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default Contact;
