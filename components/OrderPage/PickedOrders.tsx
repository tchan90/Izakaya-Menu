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
        { id: cartItems.id, name: cartItems.name, count: cartItems.count },
      ]);
      handleRemovefromCart(cartItems.id);
    }
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
        <div className="col-span-2 bg-white w-full text-center text-2xl rounded-md">
          <p className="inline-block align-middle">{cartItems.name}</p>
        </div>
        <div className="col-span-1 flex justify-center bg-white w-full text-center text-2xl rounded-md">
          <button
            onClick={() => {
              increment(cartItems.id);
            }}
          >
            <FontAwesomeIcon icon={faPlusSquare} size="2x" />
          </button>
          <p className="m-3 px-4 py-2 border-2">{cartItems.count}</p>
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
        </div>

        <div className="text-right">
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
