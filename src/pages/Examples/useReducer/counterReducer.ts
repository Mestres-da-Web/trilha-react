import { Action, State } from "./types";

function counterReducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "set":
      if (action.payload) {
        return { ...state, count: state.count + action.payload };
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default counterReducer;
