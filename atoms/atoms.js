import { atom, selector } from 'recoil';

// Cart State
export const cartState = atom({
  key: 'cartState',
  default: [],
});

// Kitchen State
export const kitchenState = atom({
  key: 'kitchenState',
  default: [],
});

// Vegeterian State
export const vegeterianState = atom({
  key: 'vegeterianState',
  default: false,
});
export const toggleVeggiemode = selector({
  key: 'vegieModeToggle',
  set: ({ get, set }) => {
    const currentMode = get(vegeterianState);
    set(vegeterianState, !currentMode);
  },
});
