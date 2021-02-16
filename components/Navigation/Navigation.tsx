import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faMoneyCheckAlt,
  faUtensils,
  faUser,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import Cheque from '../../modals/Cheque';

import { vegeterianState, toggleVeggiemode } from '../../atoms/atoms';

const Navigation = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };

  const isVegModeEnabled = useRecoilValue(vegeterianState);
  const toggleVegMode = useSetRecoilState(toggleVeggiemode);

  const router = useRouter();
  const isOrderPage = router.route === '/order';

  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16 py-2">
            <FontAwesomeIcon icon={faUtensils} color="white" size="3x" />
            <div className="flex space-x-4 text-white">
              {isOrderPage && (
                <span className="cursor-pointer" onClick={() => router.back()}>
                  <FontAwesomeIcon icon={faArrowLeft} color="white" size="1x" />{' '}
                  Back to Menu
                </span>
              )}
              {!isOrderPage && (
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    name="toggleSwitch"
                    id="toggleSwitch"
                    checked={isVegModeEnabled}
                    onChange={toggleVegMode}
                  />{' '}
                  <label htmlFor="toggleSwitch">Turn on Veggie Mode</label>
                </div>
              )}
              <span className="cursor-pointer">
                <FontAwesomeIcon icon={faUser} color="white" size="1x" /> Get
                Staff
              </span>
              <span>
                <FontAwesomeIcon
                  icon={isOrderPage ? faMoneyCheckAlt : faShoppingCart}
                  color="white"
                  size="1x"
                />{' '}
                {isOrderPage ? (
                  <button
                    className="cursor-pointer"
                    onClick={handleToggleModal}
                  >
                    Get Cheque
                  </button>
                ) : (
                  <Link href="http://localhost:3000/order">Order Page</Link>
                )}
              </span>
            </div>
          </div>
        </div>
      </nav>
      <Cheque showModal={openModal} toggleModal={handleToggleModal} />
    </>
  );
};
export default Navigation;
