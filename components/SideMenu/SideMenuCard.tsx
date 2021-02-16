import Link from 'next/link';

const SideMenuCard = ({ title }) => {
  return (
    <Link href={`http://localhost:3000/menu/${title}`}>
      <div className="w-full bg-gray-200 my-4 p-4 text-xl text-center capitalize cursor-pointer border-2 hover:border-indigo-500	">
        {title}
      </div>
    </Link>
  );
};
export default SideMenuCard;
