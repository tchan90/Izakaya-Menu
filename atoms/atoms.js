import { atom, selector } from 'recoil';

//Modal
export const openModalState = atom({
  key: 'openModalState',
  default: false,
});

export const toggleOpenModal = selector({
  key: 'openModalToggle',
  set: ({ get, set }) => {
    const currentValue = get(openModalState);

    set(openModalState, !currentValue);
  },
});
