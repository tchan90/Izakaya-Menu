import { useState } from 'react';
import ReactModal from './ReactModal';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { kitchenState } from '../atoms/atoms';

const Cheque = (props) => {
  const [readyToPay, setReadyToPay] = useState(false);
  const currentCart = useRecoilValue(kitchenState);
  let pricesArray = [];
  let total = 0;
  let itemTotal = 0;
  if (currentCart.length > 0) {
    currentCart.map((item) => {
      itemTotal = item.price * item.count;
      pricesArray.push(itemTotal);
    });
    const addPrices = (acc, currentValue) => acc + currentValue;
    const getTotal = pricesArray.reduce(addPrices);
    total = getTotal.toFixed(2);
  }

  const resetKitchen = useResetRecoilState(kitchenState);
  const goPay = () => {
    setReadyToPay(true);
    resetKitchen();
  };

  return (
    <ReactModal {...props}>
      {!readyToPay ? (
        <div className="w-auto md:w-6/12 m-auto">
          <h1 className="text-md md:text-3xl text-green-400 bold border-b-4 mb-4 pb-2">
            Ordered Items
          </h1>
          {currentCart.map((item) => (
            <div className="w-auto flex justify-between text-sm md:text-lg p-3 md:p-5 mt-2 border-2 md:border-4 border-gray-200 rounded-xl">
              <p>
                x{item.count} - {item.name}
              </p>
              <p>${(item.price * item.count).toFixed(2)}</p>
            </div>
          ))}
          <p className="text-right my-3 text-sm md:text-lg">
            Total Amount: ${total}
          </p>
          {total > 0 && (
            <div className="flex justify-center mt-10">
              <button
                className="p-4 text-red-500 border-double border-4 border-light-red-500 hover:border-red-600 text-sm md:text-base"
                onClick={goPay}
              >
                Ready to Pay
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center text-3xl">
          Please go to the counter to pay
        </div>
      )}
    </ReactModal>
  );
};
export default Cheque;
