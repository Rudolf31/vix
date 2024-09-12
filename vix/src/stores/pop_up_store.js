// store.js
import {create} from 'zustand';

const usePopUpStore = create((set) => ({
  isPopupOpen: false,
  openPopup: () => set({ isPopupOpen: true }),
  closePopup: () => set({ isPopupOpen: false }),
  isPopupAuthOpen: false,
  openPopUpAuth: () => set({ isPopupAuthOpen: true }),
  closePopUpAuth: () => set({ isPopupAuthOpen: false }),
}));

export default usePopUpStore;
