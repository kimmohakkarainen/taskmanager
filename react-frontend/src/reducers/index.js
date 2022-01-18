const initialState = {
  person: { person_id: 1, username: "admin", fullname: "Administrator " },
  helloWorld: "",
  error: null
};

export default function PL2State(state = initialState, action) {
  console.log(action);
  if (action.type === "LOGOUT_SUCCEEDED") {
    return initialState;
  } else {
    const newState = Object.assign({}, state, { error: null }, action.payload);
    return newState;
  }
}
