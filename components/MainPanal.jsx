import PropTypes from "prop-types";
import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from './Layout';
import SideMenu from './SideMenu/SideMenu';
import MainMenu from './MainMenu/MainMenu';
import styles from './MainPanal.module.css';

const MainPanal = ({ items, categories }) => {
  const router = useRouter();
  const param = router.query.name;
  const [value, setValue] = useState(param);

  const onChange = (e) => {
    setValue(e);
    router.push(`/menu/${e}`);
  };
  return (
    <Layout>
      <div className="block md:flex md:flex-row">
        {/* Category Menu on Mob */}
        <div className="relative flex flex-col mx-2 py-2 h-auto bg-white block border-b-2 border-gray-200 md:hidden">
          <h1 className="text-2xl text-gray-400 mb-2 capitalize"> Category </h1>
          <select onChange={(e) => onChange(e.target.value, e)} value={value}>
            {categories.map((c, k) => {
              return (
                <option key={k} value={c}>
                  {c}
                </option>
              );
            })}
          </select>
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

MainPanal.propTypes = {
  categories: PropTypes.array,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    vegeterian: PropTypes.bool
  }))
}
export default MainPanal;
