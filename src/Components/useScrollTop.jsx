import { useEffect } from "react";

const useScrollTop = () => {
  const ScrollToTopOnMount = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  };

  return ScrollToTopOnMount;
};

export default useScrollTop;
