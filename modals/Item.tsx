import ReactModal from './ReactModal';

const Item = (props) => {
  const foodItem = props.food;
  return (
    <ReactModal {...props}>
      <div>{foodItem.name}</div>
      <div>{foodItem.price}</div>
      <div>{foodItem.description}</div>
    </ReactModal>
  );
};
export default Item;
