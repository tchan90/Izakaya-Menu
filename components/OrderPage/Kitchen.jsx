import { useRecoilValue } from 'recoil';
import { kitchenState } from '../../atoms/atoms';

const Kitchen = () => {
  const kitchen = useRecoilValue(kitchenState);

  return (
    <div className="m-auto md:w-11/12 lg:w-2/3">
      {kitchen.map((k) => (
        <div className="flex mb-5">
          <div className="bg-blue-700 w-20 md:w-48 mr-2 py-4 text-center text-lg md:text-2xl rounded-md">
            <p className="text-white">x{k.count}</p>
          </div>
          <div className="bg-white w-full py-4 text-center text-lg md:text-2xl rounded-md">
            <p>{k.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Kitchen;
