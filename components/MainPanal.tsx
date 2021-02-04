import Layout from './Layout';
import SideMenu from './SideMenu/SideMenu';
import MainMenu from './MainMenu/MainMenu';
import styles from './MainPanal.module.css';

const MainPanal = ({ items, categories }) => {
  return (
    <Layout>
      <div className="flex flex-row">
        <div className="flex flex-col">
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
