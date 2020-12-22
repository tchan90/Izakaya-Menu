import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';

export const getStaticProps: GetStaticProps = async (context) => {

  return {
    // revalidate: 10,
    props: {
      name:'Favourite Drinks'
    },
  };
};

// GET STATIC PATHS
export const getStaticPaths: GetStaticPaths = async () => {
    // access all node related things or handlers (db, fs, etc)
    return {
      paths: [
        {
          params: { name: 'Pepsi' },
        },
        { params: { name: 'Coke' } },
      ],
      fallback: true,
    };
  };

  const MyDrinks = (props) => {
    const router = useRouter();
  // if fallback set to true, wait for server to stop loading
    if(router.isFallback) {
      return <h1>Loading...</h1>
    }
  return <h1>{props.name} - {router.query.name}</h1>;
  };
  export default MyDrinks;