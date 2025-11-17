import { twMerge } from "tailwind-merge";
import HeroText from "../HeroText";
import HeroPromoCard from "../HeroPromoCard";

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const HeroSection: React.FC<HeroSectionProps> = ({ className, ...props }) => {
  return (
    <section
      {...props}
      className={twMerge(
        "w-full flex justify-between items-center py-20",
        className
      )}
    >
      <HeroText />
      <HeroPromoCard />
    </section>
  );
};

export default HeroSection;