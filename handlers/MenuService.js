import data from '../data/menu.json';

export const getMenu = () => {
  return data;
};

export const getCategories = () => {
  return Object.keys(data);
};

export const getItems = (categoryType) => {
  return data[categoryType];
};
