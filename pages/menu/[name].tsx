import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import MainPanal from '../../components/MainPanal';

export const getStaticProps: GetStaticProps = ({ params }) => {
  return Promise.all([
    fetch(`http://localhost:3000/api/category/${params.name}`),
    fetch(`http://localhost:3000/api/getCategories`),
  ])
    .then((responses) => {
      return Promise.all(
        responses.map((response) => {
          return response.json();
        })
      );
    })
    .then((data) => {
      return {
        props: {
          items: data[0],
          categories: data[1],
        },
      };
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/getMenu');
  const { data } = await res.json();
  const paths = Object.keys(data).map((d) => ({
    params: { name: d },
  }));
  return {
    paths,
    fallback: false,
  };
};

const Menu = ({ items, categories }) => {
  return (
    <>
      <Head>
        <title>Izakaya Inn - Menu</title>
      </Head>
      <div className="bg-gray-400 h-screen">
        <MainPanal items={items} categories={categories} />
      </div>
    </>
  );
};
export default Menu;
