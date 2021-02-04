import SideMenuCard from './SideMenuCard';

const SideMenu = ({ categories }) => {
  const { cat } = categories;
  return (
    <div className="w-full flex-1 p-3" style={{ height: '88vh' }}>
      <div className="h-full bg-white rounded-md p-7">
        {cat.map((c) => {
          return <SideMenuCard title={c} />;
        })}
      </div>
    </div>
  );
};
export default SideMenu;
