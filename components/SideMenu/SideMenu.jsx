import SideMenuCard from './SideMenuCard';

const SideMenu = ({ categories }) => {
  return (
    <div className="w-full flex-1 p-3" style={{ height: '88vh' }}>
      <div className="h-full bg-white rounded-md p-7">
        {categories.map((c, k) => {
          return <SideMenuCard key={k} title={c} />;
        })}
      </div>
    </div>
  );
};
export default SideMenu;
