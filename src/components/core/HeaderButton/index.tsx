import React from "react";
import HeroButton from "../../ui/HeroButton";

const HeaderButton: React.FC = () => {
  return (
    <li>
      <HeroButton
        size="header"
        variant="outline"
        buttonColor="accent"
        className="group"
      >
        Заказать звонок
      </HeroButton>
    </li>
  );
};

export default HeaderButton;
