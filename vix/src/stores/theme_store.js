
import {create} from 'zustand';

const useThemeStore = create((set) => ({
  isDarkMode: true,
  setDarkModeTrue: () => set({ isDarkMode: true }),
  setDarkModeFalse: () => set({ isDarkMode: false }),
}));

export default useThemeStore;
