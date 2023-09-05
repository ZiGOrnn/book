"use client";

import { createContext, useReducer } from "react";
import { Children } from "../types/children";
import { reducer } from "./reducers";
import { ContextState, InitialState } from "./types";

export const initialState: InitialState = {
  isLogined: false,
  profile: {
    accessToken: "",
    username: "",
  },
};

export const Context = createContext<ContextState>({
  state: initialState,
  dispatch: () => {},
});

export const Store = ({ children }: Children) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
