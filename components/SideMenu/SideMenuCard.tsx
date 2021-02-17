import { useRouter } from 'next/router';
import Link from 'next/link';

const SideMenuCard = ({ title }) => {
  const router = useRouter();
  const param = router.query.name;
  return (
    <Link href={`/menu/${title}`}>
      <div
        className={`w-full bg-gray-200 my-4 p-4 text-xl text-center capitalize cursor-pointer border-2 hover:border-indigo-500 ${
          param === title && 'border-indigo-500'
        }`}
      >
        {title}
      </div>
    </Link>
  );
};
export default SideMenuCard;
