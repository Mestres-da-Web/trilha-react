export interface State {
  count: number;
  name: string;
}

export interface Action {
  type: "increment" | "decrement" | "reset" | "set";
  payload?: number;
}
