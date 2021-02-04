import data from '../../data/menu.json';

const getMenu = (req, res) => {
  return res.status(200).json({ data });
};
export default getMenu;
