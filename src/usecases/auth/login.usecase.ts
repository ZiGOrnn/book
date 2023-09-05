import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../config/firebase";

export const loginUsecase = {
  execute: async (username: string, password: string) => {
    try {
      const data = await signInWithEmailAndPassword(
        firebaseAuth,
        username,
        password
      );
      return {
        result: {
          accessToken: await data.user.getIdToken(),
          username: data.user.email || "",
        },
        error: null,
      };
    } catch (error) {
      return { result: null, error };
    }
  },
};
