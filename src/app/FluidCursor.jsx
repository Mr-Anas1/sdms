"use client";
import { useEffect } from "react";
import useFluidCursor from "./useFluidCursor";
const FluidCursor = () => {
  useEffect(() => {
    useFluidCursor();
  }, []);
  return (
    <div className="fixed top-0 left-0 z-2">
      <canvas
        id="fluid"
        className="w-screen h-screen"
        style={{ pointerEvents: "none", "z-index": -1 }}
      />
    </div>
  );
};
export default FluidCursor;
