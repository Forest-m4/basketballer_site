import { twMerge } from "tailwind-merge";
import HeroText from "../../components/core/HeroText";
import HeroPromoCard from "../../components/core/HeroPromoCard";

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const HeroSection: React.FC<HeroSectionProps> = ({ className, ...props }) => {
  return (
    <section
      {...props}
      className={twMerge(
        "w-full py-20 px-[40px] flex justify-between items-center",
        className
      )}
    >
      <HeroText />
      <HeroPromoCard />
    </section>
  );
};

export default HeroSection;