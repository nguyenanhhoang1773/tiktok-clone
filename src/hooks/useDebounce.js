import { useEffect, useState } from 'react';
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const TimeId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(TimeId);
  }, [value, delay]);
  return debouncedValue;
};
export default useDebounce;
