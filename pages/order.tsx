import Head from 'next/head';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { cartState, kitchenState } from '../atoms/atoms';

import Layout from '../components/Layout';
import PickedOrders from '../components/OrderPage/PickedOrders';
import Kitchen from '../components/OrderPage/Kitchen';

const Order = () => {
  const cart = useRecoilValue(cartState);

  const resetCart = useResetRecoilState(cartState);
  const resetKitchen = useResetRecoilState(kitchenState);

  const resetEverything = () => {
    resetCart();
    resetKitchen();
  };

  return (
    <>
      <Head>
        <title>Izakaya Inn - Order Page</title>
      </Head>
      <div className="bg-gray-800 h-screen">
        <Layout />
        <div className="bg-gray-200 h-screen mt-2 p-16 rounded-t-2xl">
          <h1 className="text-3xl text-center">Picked Orders</h1>
          {cart.map((i, k) => (
            <PickedOrders cartItems={i} key={k} />
          ))}
          <div className="mt-52">
            <h1 className="text-3xl text-center mb-4">Confirmed Orders</h1>
            <Kitchen />
          </div>
          <div className="text-center ">
            <button className="text-blue-500" onClick={resetEverything}>
              Reset Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Order;
