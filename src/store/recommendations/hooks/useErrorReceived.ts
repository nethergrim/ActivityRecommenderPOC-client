import * as React from 'react';
import * as Redux from 'react-redux';

import { errorReceived } from '../RecommendationActions';

export const useErrorReceived = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback((error: string) => {
    return errorReceived(error, dispatch);
  }, [dispatch]);
};
