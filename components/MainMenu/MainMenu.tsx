import { useRecoilValue } from 'recoil';

import MainMenuCard from './MainMenuCard';
import { vegeterianState } from '../../atoms/atoms';

const MainMenu = ({ items }) => {
  const vegMode = useRecoilValue(vegeterianState);

  // All Items
  const { foodTypes } = items;
  // Only vegeterian options
  const onlyVegItems = foodTypes.filter((f) => f.vegeterian);

  const menuItems = vegMode ? onlyVegItems : foodTypes;
  return (
    <div className="w-full h-full pt-3 pl-3 pb-3" style={{ height: '93vh' }}>
      <div className="h-full bg-white rounded-tl-md rounded-bl-md p-4 overflow-auto">
        <div className="grid grid-cols-3 gap-6">
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
