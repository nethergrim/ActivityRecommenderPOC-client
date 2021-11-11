import React from 'react';

export const useValidateInput = ({
  height, weight, birthdate, alert,
}) => {
  return React.useCallback(() => {
    if (!height) {
      alert('Height value is missing');
      return false;
    }

    if (!weight) {
      alert('Weight value is missing');
      return false;
    }

    if (!birthdate) {
      alert('Please select birthdate');
      return false;
    }

    return true;
  }, [height, weight, birthdate, alert]);
};
