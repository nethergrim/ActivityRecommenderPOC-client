import * as React from 'react';
import * as Redux from 'react-redux';

import { clearRecommendationsReceived } from '../RecommendationActions';

export const useClearRecommendationsReceived = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(() => {
    return clearRecommendationsReceived(dispatch);
  }, [dispatch]);
};
