import React from 'react';

import { useLoadRecommendations, useErrorReceived, useRecommendationsReceived } from '@store/recommendations/hooks';

import { getRecommendations } from '../../../services/RecommendationsAPI';

type Measurements = {
  height: string;
  weight: string;
  birthdate: Date;
  usesMetricSystem: boolean;
};

export const useApplyMeasurements = ({
  height, weight, birthdate, usesMetricSystem,
}: Measurements) => {
  const measurementSystem = usesMetricSystem ? 'metric' : 'US';

  const loadRecommendations = useLoadRecommendations();
  const errorReceived = useErrorReceived();
  const recommendationsReceived = useRecommendationsReceived();

  return React.useCallback(() => {
    loadRecommendations();
    getRecommendations(
      measurementSystem,
      Number.parseFloat(weight),
      Number.parseFloat(height),
      birthdate,
    )
      .then((response) => response.json())
      .then((result: any) => {
        if (result.error) {
          errorReceived(result.error);
        } else {
          recommendationsReceived(result.recommendations);
        }
      })
      .catch((error) => {
        console.error(error);
        errorReceived(error);
      });
  }, [height, weight, birthdate, usesMetricSystem]);
};
