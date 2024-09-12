
import {create} from 'zustand';

const useAuthStore = create((set) => ({
  userAuth: true,
  userName: '',
  setUserAuth: () => set({ userAuth: true }),
  closeAuth: () => set({ userAuth: false }),
  setUserName: (name) => set({ userName: name }),
  clearUserName: () => set({ userName: '' }),
}));

export default useAuthStore;
