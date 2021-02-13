import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('http://localhost:3000/api/getMenu');
  const data = await res.json();

  return {
    props: {
      menu: data,
    },
  };
};

const Home = ({ menu }) => {
  const firstItem = Object.keys(menu.data)[0];
  return (
    <div className="bg-gray-400 h-screen">
      <Head>
        <title>Izakaya Inn</title>
      </Head>
      <div className="flex h-screen">
        <Link href={`http://localhost:3000/menu/${firstItem}`}>
          <div className="m-auto cursor-pointer">Click to go to Menu</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
