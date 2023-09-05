import { Dispatch } from "react";
import { Payload } from "./payload";

export type ActionType = "SET_INITIAL_STATE" | "SET_PAYLOAD_STATE";

export interface Action {
  type: ActionType;
  payload: Partial<InitialState>;
}

export interface ContextState {
  state: InitialState;
  dispatch: Dispatch<Action>;
}

export interface InitialState {
  isLogined: boolean;
  profile: Payload;
}
