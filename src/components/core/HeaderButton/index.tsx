import React from "react";
import HeroButton from "../../ui/HeroButton";
import Typography from "../../ui/Typography";

const HeaderButton: React.FC = () => {
  return (
    <li>
      <HeroButton
        size="header"
        variant="outline"
        buttonColor="accent"
        className="[&>span]:text-inherit"
      >
        <Typography
          variant="11-700"
          color="accent"
          className="hover:text-white"
        >
          Заказать звонок
        </Typography>
      </HeroButton>
    </li>
  );
};

export default HeaderButton;
