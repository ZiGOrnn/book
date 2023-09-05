import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../config/firebase";
import { firestoreRepository } from "../../repositories/firestore.repository";
import { Profile } from "../../repositories/types/profile";
import { RegisterForm } from "../../repositories/types/register-form";

export const registerUsecase = {
  execute: async (payload: RegisterForm) => {
    try {
      const result = await createUserWithEmailAndPassword(
        firebaseAuth,
        payload.username,
        payload.password
      );
      const data: Profile = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        image: "",
      };
      await firestoreRepository.createProfile(result.user.uid, data);
      return { result, error: null };
    } catch (error) {
      return { result: null, error };
    }
  },
};
