import React from "react";
import { useEffect, useRef, useState } from "react";

const useCursorSpotlight = (
  backgroundColor,
  highlightColor,
  highlightSize = "400px",
  active = true
) => {
  // console.log(backgroundColor)
  const [cursorInItem, setCursorInItem] = useState(false);
  const [cursorPos, setCursorPos] = useState([0, 0]);

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
        let rect = elementRef.current.getBoundingClientRect();
        let x = e.clientX - rect.x;
        let y = e.clientY - rect.y;
        setCursorPos([e.clientX - rect.left, e.clientY - rect.top]);

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
    // `radial-gradient(circle at ${cursorPos[0]}px ${cursorPos[1]}px, red, rgba(29, 78, 216, 0.15), transparent 40 %)
    `radial-gradient(250px at ${cursorPos[0]}px ${cursorPos[1]}px, gray, rgba(16, 23, 42, 0.05) 80%)`
  ];
};

export default useCursorSpotlight;
