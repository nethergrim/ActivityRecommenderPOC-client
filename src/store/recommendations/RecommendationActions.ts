export const clearRecommendations = () => {
  return {
    type: 'CLEAR_RECOMMENDATIONS',
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
