import PropTypes from "prop-types";
import Navigation from './Navigation/Navigation';

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
}
export default Layout;
