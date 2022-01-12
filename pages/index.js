import Head from 'next/head';
import Animation from '../components/Animation';

export default function Home() {
  return (
    <div id='controls' className='h-screen bg-zinc-800'>
      <Head>
        <title>Camilo Guevara</title>
      </Head>
      <h1 className='text-3xl'>The start of the portfolio</h1>
      <Animation />
    </div>
  );
}
