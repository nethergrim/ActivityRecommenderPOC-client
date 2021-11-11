import { useSelector } from 'react-redux';

export const useMeasurements = () => {
  return useSelector((state) => state.measurements);
};
