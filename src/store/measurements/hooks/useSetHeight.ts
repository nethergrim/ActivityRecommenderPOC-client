import * as React from 'react';
import * as Redux from 'react-redux';

import { setHeight } from '../MeasurementsAction';

export const useSetHeight = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback((height: string) => {
    return setHeight(height, dispatch);
  }, [dispatch]);
};
