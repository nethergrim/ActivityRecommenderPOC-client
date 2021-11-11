import React from 'react';
import { useDispatch } from 'react-redux';

import { getRecommendations } from '../../../services/RecommendationsAPI';
import { clearRecommendations, errorReceived, recommendationsReceived } from '../../../store/recommendations';

type Measurements = {
  height: string | undefined;
  weight: string | undefined;
  birthdate: Date | null;
  usesMetricSystem: boolean;
};

export const useApplyMeasurements = ({
  height, weight, birthdate, usesMetricSystem,
}: Measurements) => {
  const measurementSystem = usesMetricSystem ? 'metric' : 'US';
  const dispatch = useDispatch();
  return React.useCallback(() => {
    dispatch(clearRecommendations());
    getRecommendations(
      measurementSystem,
      Number.parseFloat(weight),
      Number.parseFloat(height),
      birthdate,
    )
      .then((response) => response.json())
      .then((result: any) => {
        if (result.error) {
          dispatch(errorReceived(result.error));
        } else {
          dispatch(recommendationsReceived(result.recommendations));
        }
      })
      .catch((error) => {
        console.error(error);
        dispatch(errorReceived(error));
      });
  }, [height, weight, birthdate, usesMetricSystem]);
};
