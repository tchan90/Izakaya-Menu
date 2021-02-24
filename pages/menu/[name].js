import Head from 'next/head';
import MainPanal from '../../components/MainPanal';

import { getCategories, getItems, getMenu } from '../../handlers/MenuService';

// Get categories for side menu
// Get menu items as per category
export const getStaticProps = ({ params }) => {
  const categoryType = params.name;

  const categories = getCategories();
  const items = getItems(categoryType);

  return {
    props: {
      items,
      categories,
    },
  };
};

// Get paths according to the category names
export const getStaticPaths = async () => {
  const data = getMenu();
  const paths = Object.keys(data).map((d) => ({
    params: { name: d },
  }));
  return {
    paths,
    fallback: false,
  };
};

const Menu = ({ items, categories }) => (
  <>
    <Head>
      <title>Izakaya Inn - Menu</title>
    </Head>
    <div className="bg-gray-400 h-screen">
      <MainPanal items={items} categories={categories} />
    </div>
  </>
);

export default Menu;
