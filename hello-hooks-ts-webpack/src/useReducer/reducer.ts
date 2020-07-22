import { CommonInitState } from './initSate';

interface CommnAction {
  type: String;
}

export const commonReducer = (state: CommonInitState, action: CommnAction) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        // ...action.value,
      };
    case 'success':
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
