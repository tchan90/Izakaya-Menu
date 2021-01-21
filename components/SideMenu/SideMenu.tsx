import { FunctionComponent } from 'react';
import SideMenuCard from './SideMenuCard';

const SideMenu: FunctionComponent = ({ children }) => {
  return (
    <div className="w-full flex-1 p-3" style={{ height: '88vh' }}>
      <div className="h-full bg-white rounded-md p-7">
        <SideMenuCard />
        <SideMenuCard />
        <SideMenuCard />
      </div>
    </div>
  );
};
export default SideMenu;
