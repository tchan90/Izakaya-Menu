import data from '../../data/menu.json';

const getCategories = (req, res) => {
  const cat = Object.keys(data);
  return res.status(200).json({ cat });
};
export default getCategories;
