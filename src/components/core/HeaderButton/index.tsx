import React from "react";
import HeroButton from "../../ui/HeroButton";
import Typography from "../../ui/Typography";

const HeaderButton: React.FC = () => {
  return (
    <li>
      <HeroButton
        className="w-[140px] h-[30px] bg-transparent border border-accent hover:bg-accent group"
        color="accent"
      >
        <Typography 
          type="span" 
          variant="14-700" 
          color="accent" 
          className="group-hover:text-white transition-colors"
        >
          Заказать звонок
        </Typography>
      </HeroButton>
    </li>
  );
};

export default HeaderButton;