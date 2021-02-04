import MainMenuCard from './MainMenuCard';

const MainMenu = ({ items }) => {
  const { foodTypes } = items;
  return (
    <div className="w-full h-full pt-3 pl-3 pb-3" style={{ height: '93vh' }}>
      <div className="h-full bg-white rounded-tl-md rounded-bl-md p-4 overflow-auto">
        <div className="grid grid-cols-3 gap-6">
          {foodTypes.map((m) => (
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
