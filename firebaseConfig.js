import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";
import {
  EXPO_PUBLIC_WELLNESS_FIREBASE_API_KEY,
  EXPO_PUBLIC_WELLNESS_FIREBASE_AUTH_DOMAIN,
  EXPO_PUBLIC_WELLNESS_FIREBASE_DATABASE_URL,
  EXPO_PUBLIC_WELLNESS_FIREBASE_PROJECT_ID,
  EXPO_PUBLIC_WELLNESS_FIREBASE_STORAGEBUCKET,
  EXPO_PUBLIC_WELLNESS_FIREBASE_MESSAGE_SENDER_ID,
  EXPO_PUBLIC_WELLNESS_FIREBASE_APP_ID,
  EXPO_PUBLIC_WELLNESS_FIREBASE_MEASUREMENT_ID,
} from "@env";

const firebaseConfig = {
  apiKey: EXPO_PUBLIC_WELLNESS_FIREBASE_API_KEY,
  authDomain: EXPO_PUBLIC_WELLNESS_FIREBASE_AUTH_DOMAIN,
  projectId: EXPO_PUBLIC_WELLNESS_FIREBASE_PROJECT_ID,
  storageBucket: EXPO_PUBLIC_WELLNESS_FIREBASE_STORAGEBUCKET,
  messagingSenderId: EXPO_PUBLIC_WELLNESS_FIREBASE_MESSAGE_SENDER_ID,
  appId: EXPO_PUBLIC_WELLNESS_FIREBASE_APP_ID,
  measurementId: EXPO_PUBLIC_WELLNESS_FIREBASE_MEASUREMENT_ID,
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
