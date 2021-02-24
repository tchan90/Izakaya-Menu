import ReactModal from './ReactModal';

const Item = (props) => {
  const foodItem = props.food;
  const price = foodItem.price;
  const priceDisplay = price.toFixed(2);
  return (
    <ReactModal {...props}>
      <div className="flex">
        <img
          src={foodItem.image}
          alt={foodItem.name}
          className="w-4/5 h-full md:w-2/4"
        />
        <div className="ml-5">
          <div className="flex">
            <p className="text-lg">{foodItem.name}</p>{' '}
            {foodItem.vegeterian && (
              <span className="h-5 w-5 ml-2 p-1 flex items-center justify-center bg-green-500 text-white text-sm rounded-full">
                V
              </span>
            )}
          </div>

          <p className="text-gray-700">${priceDisplay}</p>
          <div className="border-t-2 mt-5 pt-3">
            <p>{foodItem.description}</p>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};
export default Item;
