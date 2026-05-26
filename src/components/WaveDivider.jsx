import React from "react";

/**
 * SVG wave divider between sections.
 * @param {object} props
 * @param {"brand"|"white"|"gold"} props.color - Fill color variant
 * @param {boolean} props.flip - Flip vertically
 */
export default function WaveDivider({ color = "white", flip = false }) {
  const colors = {
    white: "#ffffff",
    brand: "#fdf6f4",
    gold: "#fdfaf3"
  };

  return (
    <div
      className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-12 sm:h-16 md:h-20"
        fill={colors[color]}
      >
        <path d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );
}
