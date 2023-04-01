"use client";
import { useEffect, useState, useCallback } from "react";

interface WindowObj {
  innerWidth: number;
  addEventListener(event: string, callback: () => void): void;
  removeEventListener(event: string, callback: () => void): void;
}

export function useScreenSize(windowObj: WindowObj = window): {
  widthState: string;
} {
  const [width, setWidth] = useState(() => windowObj.innerWidth);

  const handleResize = useCallback(() => {
    setWidth(windowObj.innerWidth);
  }, [windowObj]);

  useEffect(() => {
    windowObj.addEventListener("resize", handleResize);

    return () => {
      windowObj.removeEventListener("resize", handleResize);
    };
  }, [handleResize, windowObj]);

  const widthState = width > 1600 ? "max-w-[1540px]" : "max-w-[1140px]";

  return { widthState };
}
