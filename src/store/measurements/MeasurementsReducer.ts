import { MeasurementsAction } from './MeasurementsAction';

const INITIAL_STATE = {
  weight: undefined,
  height: undefined,
  birthdate: new Date(2000, 0, 1),
};

export const measurementsReducer = (state = INITIAL_STATE, action: { type: string; payload: any }) => {
  switch (action.type) {
    case MeasurementsAction.SET_BODY_WEIGHT:
      return {
        ...state,
        weight: action.payload,
      };
    case MeasurementsAction.SET_BODY_HEIGHT:
      return {
        ...state,
        height: action.payload,
      };
    case MeasurementsAction.SET_BIRTHDATE:
      return {
        ...state,
        birthdate: action.payload,
      };
    default:
      return state;
  }
};

