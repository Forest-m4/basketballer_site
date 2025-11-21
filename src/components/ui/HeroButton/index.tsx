import { twMerge } from "tailwind-merge";
import Typography from "../../../components/ui/Typography";

interface HeroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const HeroButton: React.FC<HeroButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(
        "w-[239px] h-[63px] bg-[#EB2D66] rounded text-white font-bold text-[16px] transition-colors duration-150 hover:bg-[#F24C7E] active:bg-[#FF6B9C]",
        className
      )}
    >
      <Typography type="span" variant="16-900" color="white">
        {children}
      </Typography>
    </button>
  );
};

export default HeroButton;