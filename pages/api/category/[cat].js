import data from '../../../data/menu.json';

const getCategory = (req, res) => {
  const {
    query: { cat },
  } = req;
  const foodTypes = data[cat];
  res.status(200).json({ foodTypes });
};
export default getCategory;
