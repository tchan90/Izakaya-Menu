import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from './Layout';
import SideMenu from './SideMenu/SideMenu';
import MainMenu from './MainMenu/MainMenu';
import styles from './MainPanal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

const MainPanal = ({ items, categories }) => {
  const router = useRouter();
  const currentCat = router.query.name;
  const [dropDown, setDropDown] = useState(false);
  return (
    <Layout>
      <div className="block md:flex md:flex-row">
        {/* Category Menu on Mob */}
        <div className="relative flex flex-col text-center pb-2 h-auto bg-white block md:hidden">
          <h1 className="text-4xl text-indigo-900 mb-2 capitalize">
            {' '}
            {currentCat}
          </h1>
          <button
            className="w-auto mx-5 px-2 py-1 rounded-2xl border-2 border-purple-500"
            onClick={() => setDropDown(!dropDown)}
          >
            Pick Category{' '}
            <FontAwesomeIcon
              icon={faArrowAltCircleDown}
              color="black"
              size="md"
            />
          </button>
          {dropDown && (
            <div className="absolute inset-x-0 -bottom-10 bg-white p-3 z-10">
              dropdown
            </div>
          )}
        </div>

        <div className="flex flex-col hidden md:block">
          <div className="w-full bg-gray-800 flex flex-row justify-end">
            <div className={styles.triangle} />
          </div>
          <SideMenu categories={categories} />
        </div>
        <MainMenu items={items} />
      </div>
    </Layout>
  );
};
export default MainPanal;
