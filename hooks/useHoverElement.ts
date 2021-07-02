import { useState, useRef, useEffect } from "react";

export default function useHoverElement() {
  const [elementIsHover, setElementIsHover] = useState(false);
  const element = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", () => {
        setElementIsHover(true);
      });
      element.current.addEventListener("mouseleave", () => setElementIsHover(false));
    }

    return () => {
      element.current!.removeEventListener("mouseenter", () => {
        setElementIsHover(true);
      });
      element.current!.removeEventListener("mouseleave", () => setElementIsHover(false));
    };
  }, []);

  return [element, elementIsHover];
}
