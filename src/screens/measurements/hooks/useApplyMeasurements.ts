import React from 'react';

import { getRecommendations } from '../../../services/RecommendationsAPI';

export const useApplyMeasurements = ({
  height, weight, birthdate, usesMetricSystem,
}) => {
  const measurementSystem = usesMetricSystem ? 'metric' : 'US';
  return React.useCallback(() => {
    getRecommendations(
      measurementSystem,
      Number.parseFloat(weight),
      Number.parseFloat(height),
      birthdate,
    )
      .then((response) => response.json())
      .then((result: any) => {
        console.log(result.error);
        console.log(result.recommendations);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [height, weight, birthdate, usesMetricSystem]);
};
