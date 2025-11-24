import React from "react";
import Typography from "../../../components/ui/Typography";

interface Props {
  textColor?: "white" | "secondary";
}

const HeaderCart: React.FC<Props> = ({ textColor = "secondary" }) => {
  return (
    <a href="/login" className="flex items-center gap-3 flex-shrink-0 hover:opacity-80 transition-opacity">
      <img src="/images/ui/store.png" alt="Корзина" className="w-[29px]" />
      <Typography type="span" variant="14-700" color={textColor}>
        3243 ₽
      </Typography>
    </a>
  );
};

export default HeaderCart;