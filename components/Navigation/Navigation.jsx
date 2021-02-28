import { useRef, useEffect, useState } from 'react';
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
  faLeaf,
} from '@fortawesome/free-solid-svg-icons';
import Cheque from '../../modals/Cheque';

import { vegeterianState, toggleVeggiemode } from '../../atoms/atoms';

const Navigation = () => {
  const [getStaff, setGetStaff] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = () => {
    setOpenModal(!openModal);
    if (dropDown) {
      setDropDown(false);
    }
  };
  const ref = useRef(null);
  const router = useRouter();
  const isOrderPage = router.route === '/order';

  // Handle hambuger closure
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setDropDown(false);
      }
    };
    //Clean up
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [ref]);

  // Veg toggle
  const isVegModeEnabled = useRecoilValue(vegeterianState);
  const toggleVegMode = useSetRecoilState(toggleVeggiemode);

  // Staff toggle
  const toggleGetStaff = () => {
    setGetStaff(true);
    setTimeout(() => {
      setGetStaff(false);
    }, 3000);
  };

  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-full mx-auto px-3 sm:px-6 lg:px-4">
          <div className="relative flex items-center justify-between h-16 py-2">
            <Link href="/">
              <span className="text-2xl text-white border-2 border-white py-1 px-3 cursor-pointer hover:bg-gray-600 hover:bg-opacity-70">
                Izakaya Inn
              </span>
            </Link>
            <div
              className="flex md:hidden"
              id="dropDown"
              ref={ref}
              onClick={() => setDropDown(true)}
            >
              <FontAwesomeIcon icon={faBars} color="white" size="2x" />
            </div>
            {dropDown && (
              <div className="md:hidden absolute w-auto right-0 top-10 mt-4 p-3 bg-white z-10 rounded-md">
                <div>
                  <ul>
                    {!isOrderPage && (
                      <li
                        className="py-2"
                        onClick={() => {
                          toggleVegMode();
                          if (dropDown) {
                            setDropDown(false);
                          }
                        }}
                      >
                        <p className="text-black active:text-purple-600">
                          <FontAwesomeIcon
                            icon={faLeaf}
                            color="black"
                            size="sm"
                          />{' '}
                          Vegeterian Mode
                        </p>
                      </li>
                    )}
                    <li className="py-2" onClick={() => setDropDown(!dropDown)}>
                      <p className="text-black active:text-purple-600">
                        <FontAwesomeIcon
                          icon={faUser}
                          color="black"
                          size="sm"
                        />{' '}
                        Get Staff
                      </p>
                    </li>
                    <li className={!isOrderPage ? 'py-2' : ''}>
                      <p className="text-black active:text-purple-600">
                        <FontAwesomeIcon
                          icon={isOrderPage ? faMoneyCheckAlt : faShoppingCart}
                          color="black"
                          size="sm"
                        />{' '}
                        {!isOrderPage ? (
                          <Link href="/order">Order Page</Link>
                        ) : (
                          <button onClick={handleToggleModal}>
                            Get Cheque
                          </button>
                        )}
                      </p>
                    </li>
                    {isOrderPage && (
                      <li className="py-2">
                        <p
                          className="text-black active:text-purple-600"
                          onClick={() => router.back()}
                        >
                          <FontAwesomeIcon
                            icon={faArrowLeft}
                            color="black"
                            size="1x"
                          />{' '}
                          Back to Menu
                        </p>
                      </li>
                    )}
                  </ul>
                </div>
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
