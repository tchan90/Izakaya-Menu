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
    total = getTotal;
  }

  const resetKitchen = useResetRecoilState(kitchenState);
  const goPay = () => {
    setReadyToPay(true);
    resetKitchen();
  };

  return (
    <ReactModal {...props}>
      {!readyToPay ? (
        <>
          {currentCart.map((item) => (
            <>
              <p>
                x{item.count} - {item.name}
              </p>
              <p>${item.price * item.count}</p>
            </>
          ))}
          <p>Total: ${total}</p>
          {total > 0 && <button onClick={goPay}>Ready to Pay</button>}
        </>
      ) : (
        <>
          <p>Please go to the counter to pay</p>
        </>
      )}
    </ReactModal>
  );
};
export default Cheque;
