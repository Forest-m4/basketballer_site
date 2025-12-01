import { twMerge } from "tailwind-merge";
import HeroText from "../../components/core/HeroText";
import HeroPromoCard from "../../components/core/HeroPromoCard";

type HeroSectionProps = React.HTMLAttributes<HTMLDivElement>;

const HeroSection: React.FC<HeroSectionProps> = ({ className, ...props }) => {
  return (
    <section
      {...props}
      className={twMerge(
        "w-full py-8 px-10 flex justify-between items-center",
        className
      )}
    >
      <HeroText />
      <HeroPromoCard />
    </section>
  );
};

export default HeroSection;
