import { useState } from 'react';
import ReactModal from './ReactModal';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { kitchenState } from '../atoms/atoms';
import GoToCounter from './GoToCounter';

const Cheque = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };
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
  const readyToPay = () => {
    handleToggleModal();
    resetKitchen();
  };

  return (
    <ReactModal {...props}>
      {currentCart.map((item) => (
        <>
          <p>
            x{item.count} - {item.name}
          </p>
          <p>${item.price * item.count}</p>
        </>
      ))}
      <p>Total: ${total}</p>
      {total > 0 && <button onClick={readyToPay}>Ready to Pay</button>}
      <GoToCounter showModal={openModal} toggleModal={handleToggleModal} />
    </ReactModal>
  );
};
export default Cheque;
