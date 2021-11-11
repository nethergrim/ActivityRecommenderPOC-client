export enum MeasurementsAction {
  SET_BODY_WEIGHT = 'SET_BODY_WEIGHT',
  SET_BODY_HEIGHT = 'SET_BODY_HEIGHT',
  SET_BIRTHDATE = 'SET_BIRTHDATE',
}

export const actionSetWeight = (weight: string) => {
  return {
    type: MeasurementsAction.SET_BODY_WEIGHT,
    payload: weight,
  };
};

export const actionSetHeight = (height: string) => {
  return {
    type: MeasurementsAction.SET_BODY_HEIGHT,
    payload: height,
  };
};

export const actionSetBirthdate = (birthdate: Date) => {
  return {
    type: MeasurementsAction.SET_BIRTHDATE,
    payload: birthdate,
  };
};

export const setWeight = (weight: string, dispatch: ReducerDispatch<MeasurementsAction>) => {
  dispatch(actionSetWeight(weight));
};

export const setHeight = (height: string, dispatch: ReducerDispatch<MeasurementsAction>) => {
  dispatch(actionSetHeight(height));
};

export const setBirthdate = (birthdate: Date, dispatch: ReducerDispatch<MeasurementsAction>) => {
  dispatch(actionSetBirthdate(birthdate));
};
