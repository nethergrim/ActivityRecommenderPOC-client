import { RecommendationsAction } from '.';

const INITIAL_STATE = {
  recommendations: [],
  error: undefined,
  loading: false,
  recommendationsReceived: false,
};

export const recommendationsReducer = (state = INITIAL_STATE, action: { type: string; payload: any }) => {
  switch (action.type) {
    case RecommendationsAction.RECOMMENDATIONS_RECEIVED:
      return {
        ...state,
        recommendations: action.payload,
        loading: false,
        error: undefined,
        recommendationsReceived: true,
      };
    case RecommendationsAction.RECOMMENDATIONS_ERROR:
      return {
        ...state,
        recommendations: [],
        loading: false,
        error: action.payload,
      };
    case RecommendationsAction.LOAD_RECOMMENDATIONS:
      return {
        ...state,
        error: undefined,
        loading: true,
      };
    case RecommendationsAction.CLEAR_ERROR:
      return {
        ...state,
        error: undefined,
      };
    case RecommendationsAction.CLEAR_RECOMMENDATIONS_RECEIVED:
      return {
        ...state,
        recommendationsReceived: false,
      };
    default:
      return state;
  }
};

