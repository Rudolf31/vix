
import {create} from 'zustand';

const useThemeStore = create((set) => ({
  isDarkMode: false,
  setDarkModeTrue: () => set({ isDarkMode: true }),
  setDarkModeFalse: () => set({ isDarkMode: false }),
}));

export default useThemeStore;
