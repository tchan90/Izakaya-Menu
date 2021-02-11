import { useRecoilValue } from 'recoil';
import { cartState } from '../atoms/atoms';

import Layout from '../components/Layout';
import PickedOrders from '../components/OrderPage/PickedOrders';
import Kitchen from '../components/OrderPage/Kitchen';

const Order = () => {
  const cart = useRecoilValue(cartState);
  console.log('cart', cart);

  return (
    <div className="bg-gray-800 h-screen">
      <Layout />
      <div className="bg-gray-200 h-screen mt-2 p-16 rounded-t-2xl">
        <h1 className="text-3xl text-center">Picked Orders</h1>
        {cart.map((i) => (
          <PickedOrders cartItems={i} />
        ))}
        <div className="mt-52">
          <h1 className="text-3xl text-center mb-4">Confirmed Orders</h1>
          <Kitchen />
        </div>
      </div>
    </div>
  );
};
export default Order;
