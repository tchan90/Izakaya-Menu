import { GetStaticProps, GetServerSideProps } from 'next'

// STATIC PROPS
export const getStaticProps: GetStaticProps = async (context) => {
    // If using a handler
    // const handlerData = await getHandlerData();
    
    return {
        props: {
            data: Math.random()
        }
    }

}

// SERVER SIDE PROPS
// export const getServerSideProps: GetServerSideProps = async (context) => {
    
//     return {
//         props: {
//             myFavNum: Math.random()
//         }
//     }

// }

export default function Post({ data }) {
    return (
    <h1>Page {data}</h1>
    )
  }