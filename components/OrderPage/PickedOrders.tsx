import { useRecoilState, useSetRecoilState } from 'recoil';
import { cartState, kitchenState } from '../../atoms/atoms';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faPlusSquare,
  faMinusSquare,
} from '@fortawesome/free-solid-svg-icons';

const PickedOrders = ({ cartItems }) => {
  const [currentCart, setCurrentCart] = useRecoilState(cartState);
  const handleSendToKitchen = useSetRecoilState(kitchenState);

  const handleRemovefromCart = (id) => {
    const filteredCart = currentCart.filter((cart) => cart.id !== id);
    setCurrentCart(filteredCart);
  };

  const increment = (id) => {
    setCurrentCart(
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              count: item.count + 1,
            }
          : item
      )
    );
  };

  const decrement = (id) => {
    setCurrentCart(
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              count: item.count - 1,
            }
          : item
      )
    );
  };

  const confirmOrder = () => {
    if (cartItems.count < 1) {
      handleRemovefromCart(cartItems.id);
    }
    if (cartItems.count > 0) {
      handleSendToKitchen((items) => [
        ...items,
        {
          id: cartItems.id,
          name: cartItems.name,
          price: cartItems.price,
          count: cartItems.count,
        },
      ]);
      handleRemovefromCart(cartItems.id);
    }
  };

  return (
    <div className="m-auto md:w-full lg:w-2/3">
      <div className="flex mt-4">
        <div className="flex items-center">
          <button onClick={() => handleRemovefromCart(cartItems.id)}>
            <FontAwesomeIcon icon={faTimes} color="black" size="2x" />
          </button>
        </div>
        <div className="w-auto mx-10 flex items-center justify-center bg-white w-full text-center text-2xl rounded-md">
          <p>{cartItems.name}</p>
        </div>
        <div className="w-auto px-5 mr-10 flex justify-center bg-white text-center text-2xl rounded-md">
          <button
            disabled={cartItems.count < 1}
            onClick={() => {
              decrement(cartItems.id);
            }}
          >
            <FontAwesomeIcon
              icon={faMinusSquare}
              color={cartItems.count < 1 ? 'grey' : ''}
              size="2x"
            />
          </button>
          <p className="m-3 px-4 py-2 border-2">{cartItems.count}</p>
          <button
            onClick={() => {
              increment(cartItems.id);
            }}
          >
            <FontAwesomeIcon icon={faPlusSquare} size="2x" />
          </button>
        </div>

        <div className="flex items-center justify-end">
          <button
            className="auto-rows-min w-min h-auto px-5 py-2 rounded-md bg-gray-600 text-white"
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
