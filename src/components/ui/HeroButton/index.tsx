import { twMerge } from "tailwind-merge";
import Typography from "../Typography";

interface HeroButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textColor?: "white" | "black" | "primary" | "secondary" | "accent";
}

const HeroButton: React.FC<HeroButtonProps> = ({
  className,
  children,
  textColor = "white",
  ...props
}) => {
  return (
    <button
      {...props}
      className={twMerge(
        "w-[239px] h-[63px] bg-[#EB2D66] rounded transition-colors duration-150 hover:bg-[#F24C7E] active:bg-[#FF6B9C] flex items-center justify-center",
        className
      )}
    >
      <Typography
        type="span"
        variant="16-900"
        color={textColor}
      >
        {children}
      </Typography>
    </button>
  );
};

export default HeroButton;