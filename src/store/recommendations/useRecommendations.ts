import { useSelector } from 'react-redux';

export const useRecommendations = () => {
  return useSelector((state) => state.recommendations);
};
