import { useEffect, MutableRefObject } from "react";

export default function useOnClickOutside(ref: MutableRefObject<HTMLElement | null>, parentRef: MutableRefObject<HTMLElement | null>, handler: () => void) {
  useEffect(
    () => {
      const listener = (event: MouseEvent | TouchEvent) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target as Node) || (parentRef.current && parentRef.current.contains(event.target as Node))) {
          //"as Node" is bad typing, just for quick fixing
          return;
        }
        // handler(event);
        handler();
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, parentRef, handler]
  );
}
