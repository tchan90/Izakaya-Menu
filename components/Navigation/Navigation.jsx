import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faMoneyCheckAlt,
  faUser,
  faShoppingCart,
  faExclamationCircle,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import Cheque from '../../modals/Cheque';

import { vegeterianState, toggleVeggiemode } from '../../atoms/atoms';

const Navigation = () => {
  const [getStaff, setGetStaff] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };

  const isVegModeEnabled = useRecoilValue(vegeterianState);
  const toggleVegMode = useSetRecoilState(toggleVeggiemode);

  const router = useRouter();
  const isOrderPage = router.route === '/order';

  const toggleGetStaff = () => {
    setGetStaff(true);
    setTimeout(() => {
      setGetStaff(false);
    }, 3000);
  };

  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-4">
          <div className="relative flex items-center justify-between h-16 py-2">
            <Link href="/">
              <span className="text-2xl text-white border-2 border-white py-1 px-3 cursor-pointer hover:bg-gray-600 hover:bg-opacity-70">
                Izakaya Inn
              </span>
            </Link>
            <div
              className="flex md:hidden"
              onClick={() => setDropDown(!dropDown)}
            >
              <FontAwesomeIcon icon={faBars} color="white" size="2x" />
            </div>
            {dropDown && (
              <div className="md:hidden absolute w-auto right-0 top-12 mt-4 p-7 bg-white z-10">
                a drop down
              </div>
            )}

            <div className="hidden md:flex space-x-4 text-white">
              {isOrderPage && (
                <span
                  className="cursor-pointer hover:text-gray-300"
                  onClick={() => router.back()}
                >
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
                  <label
                    htmlFor="toggleSwitch"
                    className="cursor-pointer hover:text-gray-300 "
                  >
                    Turn on Veggie Mode
                  </label>
                </div>
              )}
              <span className="cursor-pointer hover:text-gray-300 relative">
                <FontAwesomeIcon icon={faUser} color="white" size="1x" />{' '}
                <button onClick={toggleGetStaff}> Get Staff</button>
                {getStaff && (
                  <span className="absolute bottom-3">
                    <FontAwesomeIcon
                      icon={faExclamationCircle}
                      color="red"
                      size="sm"
                    />
                  </span>
                )}
              </span>
              <span>
                <FontAwesomeIcon
                  icon={isOrderPage ? faMoneyCheckAlt : faShoppingCart}
                  color="white"
                  size="1x"
                />{' '}
                {isOrderPage ? (
                  <button
                    className="cursor-pointer hover:text-gray-300 "
                    onClick={handleToggleModal}
                  >
                    Get Cheque
                  </button>
                ) : (
                  <Link href="/order">
                    <span className="cursor-pointer hover:text-gray-300 ">
                      Order Page
                    </span>
                  </Link>
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
