const INITIAL_STATE = [];

export default function testReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    default:
      return state;
  }
}
