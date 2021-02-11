import { useRecoilState, useSetRecoilState } from 'recoil';
import { cartState, kitchenState } from '../../atoms/atoms';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const PickedOrders = ({ cartItems }) => {
  const [currentCart, setCurrentCart] = useRecoilState(cartState);
  const handleSendToKitchen = useSetRecoilState(kitchenState);

  const handleRemovefromCart = (id) => {
    const filteredCart = currentCart.filter((cart) => cart.id !== id);
    setCurrentCart(filteredCart);
  };

  const confirmOrder = () => {
    handleSendToKitchen((items) => [
      ...items,
      { id: cartItems.id, name: cartItems.name },
    ]);
    handleRemovefromCart(cartItems.id);
  };

  return (
    <div className="w-10/12 m-auto">
      <div className="grid gap-1 grid-cols-6 mt-4">
        <div className="flex items-center">
          <button onClick={() => handleRemovefromCart(cartItems.id)}>
            <FontAwesomeIcon icon={faTimes} color="black" size="2x" />
          </button>
        </div>
        <div className="col-span-1 bg-white w-full text-center text-2xl rounded-md">
          <p className="inline-block align-middle">
            Order {'#'}
            {cartItems.id}
          </p>
        </div>
        <div className="col-span-3 bg-white w-full text-center text-2xl rounded-md">
          <p className="inline-block align-middle">{cartItems.name}</p>
        </div>
        <div className="text-right">
          <button
            className="auto-rows-min w-min h-full px-5 py-2 rounded-md bg-gray-600 text-white"
            onClick={() => confirmOrder()}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
export default PickedOrders;
