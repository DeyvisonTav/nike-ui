"use client";
import { useScreenSize } from "@/utils/screen-size";
export function AboutUs() {
  const { widthState } = useScreenSize();
  return (
    <div className="w-full">
      <div className={`${widthState} mx-auto`}>aboutUs</div>
    </div>
  );
}
