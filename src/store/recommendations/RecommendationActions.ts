export enum RecommendationsAction {
  LOAD_RECOMMENDATIONS = 'LOAD_RECOMMENDATIONS',
  CLEAR_ERROR = 'CLEAR_ERROR',
  RECOMMENDATIONS_RECEIVED = 'RECOMMENDATIONS_RECEIVED',
  RECOMMENDATIONS_ERROR = 'RECOMMENDATIONS_ERROR',
}

export const actionLoadRecommendations = () => {
  return {
    type: RecommendationsAction.LOAD_RECOMMENDATIONS,
  };
};

export const actionClearError = () => {
  return {
    type: RecommendationsAction.CLEAR_ERROR,
  };
};

export const actionRecommendationsReceived = (recommendations: []) => {
  return {
    type: RecommendationsAction.RECOMMENDATIONS_RECEIVED,
    payload: recommendations,
  };
};

export const actionErrorReceived = (error: string) => {
  return {
    type: RecommendationsAction.RECOMMENDATIONS_ERROR,
    payload: error,
  };
};

export const loadRecommendations = (dispatch: ReducerDispatch<RecommendationsAction>) => {
  dispatch(actionLoadRecommendations());
};

export const clearError = (dispatch: ReducerDispatch<RecommendationsAction>) => {
  dispatch(actionClearError());
};

export const errorReceived = (error: string, dispatch: ReducerDispatch<RecommendationsAction>) => {
  dispatch(actionErrorReceived(error));
};

export const recommendationsReceived = (recommendations: [], dispatch: ReducerDispatch<RecommendationsAction>) => {
  dispatch(actionRecommendationsReceived(recommendations));
};
