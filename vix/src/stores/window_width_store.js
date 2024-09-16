import { create } from 'zustand';

const useWindowWidthStore = create((set) => ({
    windowWidth: 0,
    setWindowWidth: (width) => set({ windowWidth: width }),
}));

export default useWindowWidthStore;
