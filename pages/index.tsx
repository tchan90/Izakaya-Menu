import Head from 'next/head';
import MainPanal from '../components/MainPanal';

const Home = () => {
  return (
    <div className="bg-gray-400 h-screen">
      <Head>
        <title>Poke-dex</title>
      </Head>
      <MainPanal />
    </div>
  );
};
export default Home;
