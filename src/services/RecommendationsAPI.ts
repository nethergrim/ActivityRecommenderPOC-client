const API_URL = 'http://activity-recommender-bff.us-east-2.elasticbeanstalk.com:5000/v1';

export const getRecommendations = (measurementSystem: string, weight: number, height: number, birthdate: Date) => {
  return fetch(
    // eslint-disable-next-line max-len
    `${API_URL}/recommendations?measurement_system=${measurementSystem}&body_weight=${weight}&body_height=${height}&birthdate=${birthdate.toLocaleDateString()}`, {
      method: 'GET',
    },
  );
};
