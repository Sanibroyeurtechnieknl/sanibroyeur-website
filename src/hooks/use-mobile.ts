import { useEffect, useState } from "react";

export function useMobile(query: string = "(max-width: 768px)"): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia(query);
    const handleChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleChange(); // Initial check

    mediaQuery.addEventListener("change", handleChange);

    // Cleanup listener
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return isMobile;
}

