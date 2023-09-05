"use client";

import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { firebaseAuth } from "../config/firebase";
import { Context } from "../context/store";
import { Children } from "../types/children";
import { Path } from "../types/path";

interface Props extends Children {}

const AuthGuard = ({ children }: Props) => {
  const router = useRouter();
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        dispatch({
          type: "SET_PAYLOAD_STATE",
          payload: {
            isLogined: true,
            profile: {
              accessToken: await user.getIdToken(),
              username: user.email || "",
            },
          },
        });
      } else {
        router.replace(Path.Login);
      }
    });
    return () => unsubscribe();
  }, []);

  if (state.isLogined) {
    return children;
  }
  return <></>;
};

export default AuthGuard;
