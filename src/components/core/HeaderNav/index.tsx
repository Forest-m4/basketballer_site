import React from "react";
import HeaderNavItem from "../HeaderNavItem";
import HeaderPhone from "../HeaderPhone";
import HeaderButton from "../HeaderButton";

interface HeaderNavProps {
  textColor?: "white" | "secondary";
}

const HeaderNav: React.FC<HeaderNavProps> = ({ textColor = "secondary" }) => {
  return (
    <ul className="flex gap-12 items-center grow justify-center list-none p-0 m-0 -translate-x-18">
      <HeaderNavItem text="Мячи" textColor={textColor} />
      <HeaderNavItem text="Кроссовки" textColor={textColor} />
      <HeaderNavItem text="Майки" textColor={textColor} />
      <HeaderNavItem text="Шорты" textColor={textColor} />
      <HeaderNavItem text="..." textColor={textColor} />
      <HeaderPhone textColor={textColor} />
      <HeaderButton />
    </ul>
  );
};

export default HeaderNav;
