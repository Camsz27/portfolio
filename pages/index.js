import Head from 'next/head';
import Animation from '../components/Animation';
import Contact from '../components/Contact';
import Description from '../components/Description';
import Header from '../components/Header';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div id='controls' className='h-screen bg-zinc-800'>
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
