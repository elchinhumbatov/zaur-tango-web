import { create } from "zustand";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { UserData } from "@/app/types";

interface AuthStore {
  user: User | null;
  userData: UserData | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  syncUserData: () => Promise<void>;
  deleteUser: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  userData: null,
  loading: true,

  login: async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    set({ user: auth.currentUser, loading: false });
  },

  logout: async () => {
    await signOut(auth);
    set({ user: null, loading: false });
  },

  syncUserData: async () => {
    if (auth?.currentUser) {
      const docRef = doc(db, "users", auth.currentUser.uid as string);
      const docSnap = await getDoc(docRef);
      set({
        userData: docSnap.exists() ? (docSnap.data() as UserData) : null,
        loading: false,
      });
    } else {
      set({ user: null, loading: false });
    }
  },

  deleteUser: async () =>
    set(() => ({
      user: null,
      userData: null,
      loading: true,
    })),
}));

// Listen to Firebase auth changes once globally
onAuthStateChanged(auth, async (user) => {
  if (auth?.currentUser) {
    const docRef = doc(db, "users", auth?.currentUser?.uid as string);
    const docSnap = await getDoc(docRef);
    useAuthStore.setState({
      user,
      userData: docSnap.exists() ? (docSnap.data() as UserData) : null,
      loading: false,
    });
  } else {
    useAuthStore.setState({ user: null, loading: false });
  }

  // const setUser = useAuthStore.getState();
  // setUser.loading = false;
  // useAuthStore.setState({ user, loading: false });
});
