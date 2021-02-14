import ReactModal from './ReactModal';
import { useRecoilValue } from 'recoil';
import { kitchenState } from '../atoms/atoms';

const Cheque = (props) => {
  const currentCart = useRecoilValue(kitchenState);
  let pricesArray = [];
  let total = 0;
  currentCart.map((item) => {
    pricesArray.push(item.price);
  });
  if (pricesArray.length !== 0) {
    const addPrices = (acc, currentValue) => acc + currentValue;
    const getTotal = pricesArray.reduce(addPrices);
    total = getTotal;
  }

  return (
    <ReactModal {...props}>
      <p>Total: ${total}</p>
    </ReactModal>
  );
};
export default Cheque;
