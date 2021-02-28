import { useRecoilValue } from 'recoil';

import MainMenuCard from './MainMenuCard';
import { vegeterianState } from '../../atoms/atoms';

const MainMenu = ({ items }) => {
  const vegMode = useRecoilValue(vegeterianState);

  // Only vegeterian options
  const onlyVegItems = items.filter((f) => f.vegeterian);

  const menuItems = vegMode ? onlyVegItems : items;
  return (
    <div
      className="w-full h-full md:pt-3 md:pl-3 m md:pb-3"
      style={{ height: '93vh' }}
    >
      <div className="h-full md:bg-white md:rounded-tl-md md:rounded-bl-md md:p-4 overflow-auto">
        <div className="grid md:gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {menuItems.map((m) => (
            <div className="flex justify-center align-center" key={m.id}>
              <MainMenuCard food={m} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MainMenu;
