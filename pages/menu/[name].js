import Head from 'next/head';
import MainPanal from '../../components/MainPanal';

export const getStaticProps = ({ params }) => {
  return Promise.all([
    fetch(`${process.env.DB_HOST}/api/category/${params.name}`),
    fetch(`${process.env.DB_HOST}/api/getCategories`),
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

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.DB_HOST}/api/getMenu`);
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
