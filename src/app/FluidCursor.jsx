"use client";
import { useEffect } from "react";
import useFluidCursor from "./useFluidCursor";

const FluidCursor = () => {
  useEffect(() => {
    useFluidCursor();
  }, []);

  return (
    <div className="fixed top-0 left-0 z-10 pointer-events-none">
      <canvas
        id="fluid"
        className="w-screen h-screen"
        style={{ pointerEvents: "none", zIndex: 10, filter: "grayscale(100%)" }}
      />
    </div>
  );
};

export default FluidCursor;
