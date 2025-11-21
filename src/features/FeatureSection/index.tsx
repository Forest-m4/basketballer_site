import TextSection from "../../components/core/TextSection";
import StatsSection from "../../components/core/StatsSection";


const FeatureSection: React.FC = () => {
  return (
    <section className="w-full py-20 px-[60px] bg-gray-50 flex flex-col gap-12">
      <TextSection />
      <StatsSection />
    </section>
  );
};

export default FeatureSection;