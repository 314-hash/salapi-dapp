import Head from 'next/head';
import SalapiDApp from '../components/SalapiDApp';

export default function Home() {
  return (
    <>
      <Head>
        <title>SALAPI DApp</title>
        <meta name="description" content="SALAPI Token DApp for Filipinos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SalapiDApp />
    </>
  );
}
