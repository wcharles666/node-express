import { CommonInitState } from './initSate';

interface CommnAction {
  type: String;
  value: object;
}

export const commonReducer = (state: CommonInitState, action: CommnAction) => {
  console.log('djhsdjs', action);
  switch (action.type) {
    case 'leftSide':
      return {
        ...state,
        ...action.value,
      };
    case 'activeMenu':
      return {
        ...state,
        ...action.value,
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
