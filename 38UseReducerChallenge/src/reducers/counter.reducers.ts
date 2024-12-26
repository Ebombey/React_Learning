type State = {
  count: number;
};

type Action =
  | { type: "reset" }
  | { type: "incrementByAmount"; payload: number }
  | { type: "decrementByAmount"; payload: number };

const initialState = {
  count: 0,
};

const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "reset":
      return { ...state, count: (state.count = 0) };

    case "incrementByAmount":
      return { ...state, count: state.count + action.payload };

    case "decrementByAmount":
      return { ...state, count: state.count - action.payload };

    default:
      return state;
  }
};

export { initialState, counterReducer };
