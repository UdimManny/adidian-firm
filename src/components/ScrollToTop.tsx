import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// With real URLs, React Router keeps the scroll position between pages; reset it.
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
