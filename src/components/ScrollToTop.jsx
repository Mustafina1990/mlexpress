import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to the element with that ID
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Add a small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;