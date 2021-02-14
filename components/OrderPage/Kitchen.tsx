import { useRecoilValue } from 'recoil';
import { kitchenState } from '../../atoms/atoms';

const Kitchen = () => {
  const kitchen = useRecoilValue(kitchenState);

  return (
    <div className="w-10/12 m-auto">
      {kitchen.map((k) => (
        <div className="flex mb-5">
          <div className="col-span-1 bg-white w-48 mr-2 p-1 text-center text-2xl rounded-md">
            <p>
              Order {'#'}
              {k.id}
            </p>
          </div>
          <div className="col-span-1 bg-white w-48 mr-2 p-1 text-center text-2xl rounded-md">
            <p>x{k.count}</p>
          </div>
          <div className="col-span-2 bg-white w-full p-1 text-center text-2xl rounded-md">
            <p>{k.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Kitchen;
