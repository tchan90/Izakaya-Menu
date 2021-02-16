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
        <div className="bg-gray-200 h-screen mt-2 p-16 rounded-t-2xl overflow-y-scroll">
          <h1 className="text-3xl text-left pb-3 border-b-2 border-gray-300">
            Picked Orders
          </h1>
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
            <h1 className="text-3xl text-left mb-4 pb-3 border-b-2 border-gray-300">
              Confirmed Orders
            </h1>
            <Kitchen />
          </div>
        </div>
      </div>
    </>
  );
};
export default Order;
