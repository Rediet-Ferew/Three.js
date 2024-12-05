import React, { useEffect, useRef } from "react";

const Cursor = ({ activeColor }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-5 h-5 bg-transparent border-2 border-gray-500 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-200 ease-in-out"
      style={{ backgroundColor: activeColor }}
    ></div>
  );
};

export default Cursor;
