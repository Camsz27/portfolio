import Head from 'next/head';
import Animation from '../components/Animation';
import Contact from '../components/Contact';
import Description from '../components/Description';
import Header from '../components/Header';
import Projects from '../components/Projects';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const spanishElements = document.querySelectorAll('[lang=es]');
    [...spanishElements].map((element) => element.classList.add('hidden'));
  }, []);

  return (
    <div id='controls' className=' bg-zinc-800'>
      <Head>
        <title>Camilo Guevara</title>
      </Head>
      <Header />
      <Animation />
      <Description />
      <Projects />
      <Contact />
    </div>
  );
}
