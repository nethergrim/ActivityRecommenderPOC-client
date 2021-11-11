import * as React from 'react';
import * as Redux from 'react-redux';

import { loadRecommendations } from '../RecommendationActions';

export const useLoadRecommendations = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(() => {
    return loadRecommendations(dispatch);
  }, [dispatch]);
};
