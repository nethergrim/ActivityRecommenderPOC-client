/* eslint-disable import/no-default-export */
import { combineReducers } from 'redux';

const INITIAL_STATE = {
  recommendations: [],
  error: undefined,
  loading: false,
};

const reducer = (state = INITIAL_STATE, action: { type: string; payload: any }) => {
  switch (action.type) {
    case 'RECOMMENDATIONS_RECEIVED':
      return {
        ...state,
        recommendations: action.payload,
        loading: false,
        error: undefined,
      };
    case 'RECOMMENDATIONS_ERROR':
      return {
        ...state,
        recommendations: [],
        loading: false,
        error: action.payload,
      };
    case 'CLEAR_RECOMMENDATIONS':
      return {
        ...state,
        recommendations: [],
        error: undefined,
        loading: true,
      };
    default:
      return state;
  }
};

export const recommendationsReducer = combineReducers({
  recommendations: reducer,
});
