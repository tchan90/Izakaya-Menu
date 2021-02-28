import Head from 'next/head';
import { useRecoilValue } from 'recoil';
import { cartState, kitchenState } from '../atoms/atoms';

import Layout from '../components/Layout';
import PickedOrders from '../components/OrderPage/PickedOrders';
import Kitchen from '../components/OrderPage/Kitchen';

const Order = () => {
  const cart = useRecoilValue(cartState);
  const kitchen = useRecoilValue(kitchenState);

  return (
    <>
      <Head>
        <title>Izakaya Inn - Order Page</title>
      </Head>
      <div className="bg-gray-800 h-screen">
        <Layout />
        <div className="bg-gray-200 h-screen mt-2 py-3 px-4 md:p-16 rounded-t-2xl overflow-y-scroll">
          <h2 className="text-2xl md:text-3xl text-left text-gray-600 pb-3 border-b-2 border-gray-300">
            Picked Orders
          </h2>
          {cart.length === 0 && kitchen.length === 0 && (
            <p className="text-center mt-10 text-lg">
              Nothing has been added to your order, pick something from the
              menu!
            </p>
          )}
          {cart.map((i, k) => (
            <PickedOrders cartItems={i} key={k} />
          ))}
          <div className="mt-40">
            <h2 className="text-2xl md:text-3xl text-left text-gray-600 mb-4 pb-3 border-b-2 border-gray-300">
              Confirmed Orders
            </h2>
            <Kitchen />
          </div>
        </div>
      </div>
    </>
  );
};
export default Order;
