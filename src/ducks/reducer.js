const HANDLE_LOGIN = 'HANDLE_LOGIN';

const initialState = {
  isLoggedIn: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_LOGIN:
      return Object.assign({}, state, { isLoggedIn: action.payload });
    default:
      return state;
  }
}

function action(payload, type) {
  return { payload, type };
}
export function handleLogin(payload) {
  return action(payload, HANDLE_LOGIN);
}
