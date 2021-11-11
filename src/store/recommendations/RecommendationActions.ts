export const loadRecommendations = () => {
  return {
    type: 'LOAD_RECOMMENDATIONS',
  };
};

export const clearError = () => {
  return {
    type: 'CLEAR_ERROR',
  };
};

export const recommendationsReceived = (recommendations: []) => {
  return {
    type: 'RECOMMENDATIONS_RECEIVED',
    payload: recommendations,
  };
};

export const errorReceived = (error: string) => {
  return {
    type: 'RECOMMENDATIONS_ERROR',
    payload: error,
  };
};
