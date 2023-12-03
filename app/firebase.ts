import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  initializeAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import * as firebaseAuth from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVOm0YET82KZ2DIQSgJQ8FvhAjAvKzKKo",
  authDomain: "tinkoff-4aa17.firebaseapp.com",
  projectId: "tinkoff-4aa17",
  storageBucket: "tinkoff-4aa17.appspot.com",
  messagingSenderId: "169758226931",
  appId: "1:169758226931:web:93eba3e61aab56e03f3a86",
  measurementId: "G-18D6J53RND",
};

// const reactNativePersistence = (firebaseAuth as any).getReactNativePersistence;

const app = initializeApp(firebaseConfig);

// initializeAuth(app, {
//   persistence: reactNativePersistence(ReactNativeAsyncStorage),
// });

initializeAuth(app);

export const auth = getAuth();

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();
