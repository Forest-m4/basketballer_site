import React from "react";
import Typography from "../../../components/ui/Typography";


interface Props {
  textColor: "white" | "secondary";
}

const HeaderCart: React.FC<Props> = ({ textColor }) => {
  return (
    <div className="flex items-center gap-3 flex-shrink-0">
      <img src="/images/ui/store.png" className="w-[29px]" />
      <Typography type="span" variant="14-700" color={textColor}>
        3243 ₽
      </Typography>
    </div>
  );
};

export default HeaderCart;