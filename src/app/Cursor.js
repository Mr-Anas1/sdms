"use client";
import { useEffect, useRef } from "react";
import "../styles/globals.css";

export default function Cursor({ darkMode }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const params = {
      pointsNumber: 40,
      widthFactor: 0.3,
      mouseThreshold: 0.6,
      spring: 0.4,
      friction: 0.5,
    };
    const trail = Array.from({ length: params.pointsNumber }, () => ({
      x: pointer.x,
      y: pointer.y,
      dx: 0,
      dy: 0,
    }));

    function updateMousePosition(x, y) {
      pointer.x = x;
      pointer.y = y;
    }

    const handleMouseMove = (e) => updateMousePosition(e.pageX, e.pageY);
    const handleResize = () => {
      canvas.width = document.body.scrollWidth;
      canvas.height = document.body.scrollHeight;
    };

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trail.forEach((point, idx) => {
        const prev = idx === 0 ? pointer : trail[idx - 1];
        const spring = idx === 0 ? params.spring * 0.4 : params.spring;
        point.dx += (prev.x - point.x) * spring;
        point.dy += (prev.y - point.y) * spring;
        point.dx *= params.friction;
        point.dy *= params.friction;
        point.x += point.dx;
        point.y += point.dy;
      });

      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);

      for (let i = 1; i < trail.length - 1; i++) {
        const xc = 0.5 * (trail[i].x + trail[i + 1].x);
        const yc = 0.5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);

        // Ensure correct color
        ctx.strokeStyle = darkMode ? "#FFFFFF" : "#000000";
        ctx.stroke();
      }

      ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
      ctx.stroke();

      requestAnimationFrame(animate);
    }

    handleResize();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [darkMode]); // React to darkMode changes

  return <canvas ref={canvasRef} className="cursor-canvas" />;
}
