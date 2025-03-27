"use client";
import React from "react";

interface NavIconProps {
  svgContent: string;
  onClick?: () => void;
  className?: string;
}

const NavIcon: React.FC<NavIconProps> = ({
  svgContent,
  onClick,
  className = "",
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      aria-label="Navigation button"
    >
      <div dangerouslySetInnerHTML={{ __html: svgContent }} />
    </button>
  );
};

export default NavIcon;
