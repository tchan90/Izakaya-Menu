import { FunctionComponent } from 'react';
import Navigation from './Navigation/Navigation';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};
export default Layout;
