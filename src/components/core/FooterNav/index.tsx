import React from "react";
import HeaderNavItem from "../HeaderNavItem";
import HeaderPhone from "../HeaderPhone";
import HeaderButton from "../HeaderButton";
import ArrowIcon from "../ArrowIcon";

interface FooterNavProps {
  textColor?: "white" | "secondary";
}

const FooterNav: React.FC<FooterNavProps> = ({ textColor = "secondary" }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ul className="flex gap-12 items-center grow justify-center list-none p-0 m-0">
      <HeaderNavItem text="Мячи" textColor={textColor} />
      <HeaderNavItem text="Кроссовки" textColor={textColor} />
      <HeaderNavItem text="Майки" textColor={textColor} />
      <HeaderNavItem text="Шорты" textColor={textColor} />
      <HeaderNavItem text="..." textColor={textColor} />

      <li>
        <button
          onClick={handleScrollToTop}
          className="cursor-pointer hover:opacity-70 transition-opacity duration-200 p-0 border-none bg-transparent"
          title="Наверх"
          aria-label="Прокрутить страницу наверх"
        >
          <ArrowIcon
            direction="up"
            color={textColor === "white" ? "#FFFFFF" : "#000000"}
            width={24}
            height={16}
          />
        </button>
      </li>

      <HeaderPhone textColor={textColor} />
      <HeaderButton />
    </ul>
  );
};

export default FooterNav;
