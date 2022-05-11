import PropTypes from 'prop-types';
import classnames from 'classnames';

const Pill = ({ color, label }) => {
  const colorOptions = {
    green: 'bg-green-300',
    red: 'bg-red-300',
    purple: 'bg-indigo-300',
    gray: 'bg-gray-300',
  };
  const colorBorder = `border-${color}-700`;

  return (
    <div
      className={classnames(
        colorOptions[color],
        colorBorder,
        'h-2/4 rounded-full py-1 px-2 m-1 text-lg text-gray-700 font-medium inline-block border-2'
      )}
    >
      <p>{label}</p>
    </div>
  );
};

export default Pill;

Pill.propTypes = {
  color: PropTypes.oneOf(['green', 'red', 'purple', 'gray']),
};
