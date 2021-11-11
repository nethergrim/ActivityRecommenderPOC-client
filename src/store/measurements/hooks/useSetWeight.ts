import * as React from 'react';
import * as Redux from 'react-redux';

import { setWeight } from '../MeasurementsAction';

export const useSetWeight = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback((weight: string) => {
    return setWeight(weight, dispatch);
  }, [dispatch]);
};
