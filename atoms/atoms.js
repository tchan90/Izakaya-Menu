import { atom, selector } from 'recoil';

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

// Add Pill
export const addPillState = atom({
  key: 'addPillState',
  default: false,
});

export const toggleAddPill = selector({
  key: 'toggleAddPill',
  set: ({ get, set }) => {
    const currentValue = get(addPillState);

    set(addPillState, !currentValue);
  },
});
