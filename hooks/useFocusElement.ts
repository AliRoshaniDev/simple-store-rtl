import { useState, useRef, useEffect, MutableRefObject } from "react";
import useOnClickOutside from "./useOnClickOutside";

type HoverElementType = [MutableRefObject<HTMLElement | null>, MutableRefObject<HTMLElement | null>, boolean];

export default function useFocusElement(): HoverElementType {
  const [elementIsHover, setElementIsHover] = useState<boolean>(false);

  const parentElement = useRef<HTMLElement | null>(null);
  const childElement = useRef<HTMLElement | null>(null);

  useOnClickOutside(childElement, parentElement, () => setElementIsHover(false));
  useEffect(() => {
    if (parentElement.current) {
      parentElement.current.addEventListener("click", () => setElementIsHover(true));
    }

    return () => {
      if (parentElement.current) {
        parentElement.current.addEventListener("click", () => setElementIsHover(true));
      }
    };
  }, []);

  return [parentElement, childElement, elementIsHover];
}
