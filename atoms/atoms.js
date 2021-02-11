import { get } from 'http';
import { atom, selector, selectorFamily } from 'recoil';

//Modal
// export const openModalState = atom({
//   key: 'openModalState',
//   default: false,
// });

// export const toggleOpenModal = selector({
//   key: 'openModalToggle',
//   set: ({ get, set }) => {
//     const currentValue = get(openModalState);

//     set(openModalState, !currentValue);
//   },
// });

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

// export const removeFromCart = selectorFamily({
//   key: 'removeFromCart',
//   set: (id) => ({ get, set }) => {
//     const currentCart = get(cartState);
//     const filteredCart = currentCart.filter((cart) => cart.id !== id);
//     set(cartState, filteredCart);
//   },
// });
