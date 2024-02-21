import React from "react";
import { useEffect, useRef, useState } from "react";

const useCursorSpotlight = (
  backgroundColor,
  highlightColor,
  highlightSize = "400px",
  active = true
) => {
  const [cursorInItem, setCursorInItem] = useState(false);
  const [cursorPos, setCursorPos] = useState([0, 0]);
  // const [spotlightStyle, setSpotlightStyle] = useState(backgroundColor);

  const elementRef = useRef();

  useEffect(() => {
    if (active) {
      const handleMouseEnter = () => {
        setCursorInItem(true);
      };
      const handleMouseLeave = () => {
        setCursorInItem(false);
      };
      if (elementRef.current) {
        elementRef.current.addEventListener("mouseenter", handleMouseEnter);
        elementRef.current.addEventListener("mouseleave", handleMouseLeave);
        return () => {
          elementRef.current?.removeEventListener(
            "mouseenter",
            handleMouseEnter
          );
          elementRef.current?.removeEventListener(
            "mouseleave",
            handleMouseLeave
          );
        };
      }
    }
  }, [elementRef, active]);

  useEffect(() => {
    if (active) {
      const handleMouseMove = (e) => {
        const rect = elementRef.current.getBoundingClientRect();
        const x = e.clientX - rect.x;
        const y = e.clientY - rect.y;
        const xPerc = (x / rect.width) * 100;
        const yPerc = (y / rect.height) * 100;
        setCursorPos([xPerc, yPerc]);
      };
      if (elementRef.current) {
        if (cursorInItem) {
          elementRef.current.addEventListener("mousemove", handleMouseMove);
        } else {
          elementRef.current.removeEventListener("mousemove", handleMouseMove);
        }
        return () => {
          elementRef.current?.removeEventListener(
            "mousemove",
            handleMouseMove
          );
        };
      }
    }
  }, [elementRef, cursorInItem, active]);

  return [
    elementRef,
    `radial-gradient(circle at ${cursorPos[0]}% ${cursorPos[1]}%, ${highlightColor} 0%, ${backgroundColor} ${highlightSize})`
  ];
};

export default useCursorSpotlight;
