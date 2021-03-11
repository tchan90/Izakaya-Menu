import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

const IconButton = ({ onClick, icon }) => {
  const icons = {
    plus: faPlus,
    search: faSearch,
  };

  return (
    <button
      className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center m-2 cursor-pointer"
      onClick={onClick}
      type="button"
    >
      <FontAwesomeIcon icon={icons[icon]} color="white" size="1x" />
    </button>
  );
};
export default IconButton;

IconButton.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
