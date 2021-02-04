import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUtensils,
  faUser,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

const Navigation = () => (
  <nav className="bg-gray-800">
    <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16 py-2">
        <FontAwesomeIcon icon={faUtensils} color="white" size="3x" />
        <div className="flex space-x-4 text-white">
          <a href="#">
            <FontAwesomeIcon icon={faUser} color="white" size="1x" /> Get Staff
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faShoppingCart} color="white" size="1x" />{' '}
            Order Page
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
