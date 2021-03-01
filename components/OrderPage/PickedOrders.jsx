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
      <div className="grid grid-cols-6 gap-1 md:flex mt-4">
        <div className="w-auto flex items-center">
          <button
            onClick={() => handleRemovefromCart(cartItems.id)}
            className="text-xs md:text-2xl"
          >
            <FontAwesomeIcon icon={faTimes} color="black" size="2x" />
          </button>
        </div>
        <div className="col-span-5 w-auto mx-auto py-2 md:py-0 md:mx-10 flex items-center justify-center bg-white w-full text-center rounded-md text-sm md:text-2xl">
          <p>{cartItems.name}</p>
        </div>
        <div className="col-start-2 col-span-5 w-auto md:px-5 md:mr-10 flex justify-center md:bg-white text-center text-xs md:text-2xl rounded-md">
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
          <p className="w-auto m-1 md:m-3 px-4 py-2 border-2 bg-white">
            {cartItems.count}
          </p>
          <button
            onClick={() => {
              increment(cartItems.id);
            }}
          >
            <FontAwesomeIcon icon={faPlusSquare} size="2x" />
          </button>
        </div>

        <div className="col-start-3 col-span-3 flex items-center justify-end">
          <button
            className="w-full md:w-min h-auto px-5 py-2 rounded-md bg-gray-600 text-white text-xs md:text-base"
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
