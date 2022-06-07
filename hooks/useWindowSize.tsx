import { useEffect, useState } from 'react';
import { WindowSizeProps } from '../interfaces';

export const useWindowSize = (): WindowSizeProps => {
  const isClient = typeof window === 'object';

  const [windowSize, setWindowSize] = useState<WindowSizeProps>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (isClient) {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  },[]);

  return windowSize;
};