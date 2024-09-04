// store.js
import {create} from 'zustand';

const usePopUpStore = create((set) => ({
  isPopupOpen: false,
  openPopup: () => set({ isPopupOpen: true }),
  closePopup: () => set({ isPopupOpen: false }),
}));

export default usePopUpStore;
