import { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { cartState } from '../../atoms/atoms';

import Pill from './components/Pill';
import IconButton from './components/IconButton';
import Item from '../../modals/Item';

const MainMenuCard = ({ food }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };

  const router = useRouter();
  const param = router.query.name;
  const drinkCat = param === 'drinks';

  const checkCart = useRecoilValue(cartState);
  const handleAddtoCart = useSetRecoilState(cartState);

  const isOrdered = checkCart.some((i) => i.id === food.id);

  const price = food.price;
  const priceDisplay = price.toFixed(2);

  return (
    <>
      <div className="w-80 h-80 bg-white m-4 border-2 border-gray-200 rounded-md shadow-md text-xl relative">
        <div className="w-full flex flex-row justify-between mb-1 absolute">
          <IconButton onClick={handleToggleModal} icon="search" />
          {isOrdered ? (
            <Pill color="green" label="Added!" />
          ) : (
            <IconButton
              onClick={() =>
                handleAddtoCart((items) => [
                  ...items,
                  {
                    id: food.id,
                    name: food.name,
                    price: food.price,
                    count: 1,
                  },
                ])
              }
              icon="plus"
            />
          )}
        </div>
        <img
          src={food.image}
          alt={food.name}
          className="object-cover w-full h-3/4"
        />
        <div className="flex justify-between items-center h-1/4 px-2 ">
          <div className="flex">
            <p className="capitalize">{food.name}</p>
            {!drinkCat && food.vegeterian && (
              <span className="h-5 w-5 mt-1 ml-1 p-1 flex items-center justify-center bg-green-500 text-white text-sm rounded-full">
                V
              </span>
            )}
          </div>

          <p className="text-gray-500">${priceDisplay}</p>
        </div>
      </div>
      <Item showModal={openModal} toggleModal={handleToggleModal} food={food} />
    </>
  );
};

MainMenuCard.propTypes = {
  food: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    vegeterian: PropTypes.bool,
  }),
};
export default MainMenuCard;
