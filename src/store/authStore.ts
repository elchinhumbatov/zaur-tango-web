import { create } from 'zustand';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface AuthStore {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: true,

  login: async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    set({ user: auth.currentUser, loading: false });
  },

  logout: async () => {
    await signOut(auth);
    set({ user: null, loading: false });
  },
}));

// Listen to Firebase auth changes once globally
onAuthStateChanged(auth, (user) => {
  // const setUser = useAuthStore.getState();
  // setUser.loading = false;
  useAuthStore.setState({ user, loading: false });
});
