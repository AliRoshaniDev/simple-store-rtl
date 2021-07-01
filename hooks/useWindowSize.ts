import { useState, useEffect } from "react";

// This hook instantly returns the width and length of viewport
function useWindowSize() {
  let initialWindowSize = { width: window.innerWidth, height: window.innerHeight };
  let [windowSize, setWindowSize] = useState(initialWindowSize);

  let handleWindowResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
