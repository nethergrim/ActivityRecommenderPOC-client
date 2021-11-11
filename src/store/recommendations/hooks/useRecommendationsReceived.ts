import * as React from 'react';
import * as Redux from 'react-redux';

import { recommendationsReceived } from '../RecommendationActions';

export const useRecommendationsReceived = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback((recommendations: []) => {
    return recommendationsReceived(recommendations, dispatch);
  }, [dispatch]);
};
