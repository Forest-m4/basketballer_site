import Typography from "../../../components/ui/Typography";

interface HeaderLogoProps {
  textColor?: "primary" | "secondary" | "black" | "accent" | "white";
  titleColor?: "primary" | "secondary" | "black" | "accent" | "white";
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ 
  textColor = "primary", 
  titleColor 
}) => {
  return (
    <div className="flex items-center gap-3 flex-shrink-0">
      <img
        src="/images/ui/logo.png"
        alt="Basketballer logo"
        className="w-[29px] h-auto"
      />
      <div className="flex flex-col">
        <Typography
          type="h1"
          variant="12-700"
          color={titleColor || textColor}
          className="m-0 leading-[1.3]"
        >
          БАСКЕТБОЛЕР
        </Typography>
        <Typography
          type="p"
          variant="12-400"
          color={textColor} 
          className="m-0 leading-[1.3]"
        >
          Магазин баскетбольных товаров
        </Typography>
      </div>
    </div>
  );
};

export default HeaderLogo;