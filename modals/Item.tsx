import ReactModal from './ReactModal';

const Item = (props) => {
  return (
    <ReactModal {...props}>
      <div>#1 Baulbasaur</div>
      <div>Image</div>
      <div>Desc</div>
    </ReactModal>
  );
};
export default Item;
