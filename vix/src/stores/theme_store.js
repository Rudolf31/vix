
import {create} from 'zustand';

const useThemeStore = create((set) => ({
  ThemeStore: true,
  setThemeStoreTrue: () => set({ userAuth: true }),
  setThemeStoreFalse: () => set({ userAuth: false }),
}));

export default useThemeStore;
