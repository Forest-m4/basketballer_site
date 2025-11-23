import React from "react";
import HeaderLogo from "../../components/core/HeaderLogo";
import HeaderNav from "../../components/core/HeaderNav";
import HeaderCart from "../../components/core/HeaderCart";
import { twMerge } from "tailwind-merge";


interface HeaderSectionProps {
  variant?: "light" | "dark"; // light — белый, dark — тёмный
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ variant = "light" }) => {
  const isDark = variant === "dark";

  return (
    <header
      className={twMerge(
        "w-full py-2",
        isDark ? "bg-secondary" : "bg-white shadow"
      )}
    >
      <div className="mx-auto flex items-center gap-10 px-[80px]">
        <HeaderLogo textColor={isDark ? "white" : "primary"} />
        <HeaderNav textColor={isDark ? "white" : "secondary"} />
        <HeaderCart textColor={isDark ? "white" : "secondary"} />
      </div>
    </header>
  );
};

export default HeaderSection;