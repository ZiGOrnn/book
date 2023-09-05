import { initialState } from "./store";
import { Action, InitialState } from "./types";

export const reducer = (
  state: InitialState,
  { type, payload }: Action
): InitialState => {
  switch (type) {
    case "SET_INITIAL_STATE": {
      return initialState;
    }
    case "SET_PAYLOAD_STATE": {
      return {
        ...state,
        ...payload,
      };
    }
    default:
      return state;
  }
};
