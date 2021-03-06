import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { getMenu } from '../handlers/MenuService';

export const getStaticProps = async (context) => {
  const data = getMenu();

  return {
    props: {
      menu: data,
    },
  };
};

const Home = ({ menu }) => {
  const firstItem = Object.keys(menu)[0];

  return (
    <div className="bg-black h-screen">
      <Head>
        <title>Izakaya Inn</title>
      </Head>
      <div className="flex h-screen">
        <div className="h-full w-full bg-black bg-opacity-60 absolute z-10" />
        <Image
          src="https://source.unsplash.com/jfZfdQtcH6k/1600x900"
          alt="Restaurant Home pic"
          layout="fill"
          objectFit="fill"
        />
        <Link href={`/menu/${firstItem}`}>
          <div className="text-7xl text-white font-serif border-double border-8 border-light-blue-500 m-auto px-9 py-5 cursor-pointer z-20 hover:bg-gray-600 hover:bg-opacity-70">
            To Menu
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
