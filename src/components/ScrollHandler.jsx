import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollHandler = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the window whenever the route (pathname) changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollHandler;