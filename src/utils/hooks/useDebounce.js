import React from "react";

const useDebounce = (value, delay = 300) => {
  const [debounced, setDebounced] = React.useState();
  React.useEffect(() => {
    const debouncedTimer = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return clearTimeout(debouncedTimer);
  }, [value, delay]);
  return debounced;
};

export default useDebounce;
