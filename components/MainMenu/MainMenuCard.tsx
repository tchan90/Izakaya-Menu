import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import Item from '../../modals/Item';

const MainMenuCard = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <div className="w-80 h-80 bg-white m-4 border-2 border-gray-200 rounded-md shadow-md text-xl">
        <div className="w-full h-3/4 bg-gray-100">
          <div className="flex flex-row justify-between">
            <button
              className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center m-2 cursor-pointer"
              onClick={handleToggleModal}
              type="button"
            >
              <FontAwesomeIcon icon={faSearch} color="white" size="1x" />
            </button>
            {/* <div className="bg-green-500 absolute right-0 top-0.5 rounded-full py-3 px-6 m-2">
          Added!
        </div> */}
            <button className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center m-2 cursor-pointer">
              <FontAwesomeIcon icon={faPlus} color="white" size="1x" />
            </button>
          </div>
          <div className="mx-auto text-center">
            <Image
              src="/baulbasuar.jpeg"
              alt="placeholder image"
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="flex flex-row h-auto justify-between mt-5 px-2">
          <p>#1 Baulbasaur</p>
          <p className="text-gray-500">$15.00</p>
        </div>
      </div>
      <Item showModal={openModal} toggleModal={handleToggleModal} />
    </>
  );
};
export default MainMenuCard;
