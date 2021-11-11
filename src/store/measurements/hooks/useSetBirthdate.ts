import * as React from 'react';
import * as Redux from 'react-redux';

import { setBirthdate } from '../MeasurementsAction';

export const useSetBirthdate = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback((birthdate: Date) => {
    return setBirthdate(birthdate, dispatch);
  }, [dispatch]);
};
