import { useEffect, useState } from "react";

interface UseDebounceProps {
  value: string;
  delay: number;
}

interface UseDebounceReturn {
  debouncedValue: string;
}

export const useDebounce = ({ value, delay }: UseDebounceProps): UseDebounceReturn => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const handler: NodeJS.Timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return { debouncedValue };
};
