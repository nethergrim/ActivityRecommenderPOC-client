import * as React from 'react';
import * as Redux from 'react-redux';

import { clearError } from '../RecommendationActions';

export const useClearError = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(() => {
    return clearError(dispatch);
  }, [dispatch]);
};
