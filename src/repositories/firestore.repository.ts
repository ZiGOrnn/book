// import { doc, setDoc } from "firebase/firestore";
// import { firestore } from "../adapter/firebase";

import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../config/firebase";
import { Colllection } from "./types/colllection";
import { Profile } from "./types/profile";

export const firestoreRepository = {
  createProfile: async (userId: string, data: Profile) => {
    await setDoc(doc(firestore, Colllection.Profile, userId), data, {
      merge: true,
    });
  },
};
