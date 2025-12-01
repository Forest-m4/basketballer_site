// features/FeatureSection/FeatureSection.tsx
import TextSection from "../../components/core/TextSection";
import StatsSection from "../../components/core/StatsSection";

const FeatureSection: React.FC = () => {
  const statsData = [
    { number: "65", label: "филиалов по всей стране" },
    { number: "379", label: "товаров в каталоге" },
    { number: "4569", label: "покупателей" },
    { number: "12", label: "часов доставка по городам" },
  ];

  return (
    <section className="w-full py-20 px-[60px] bg-gray-50 flex flex-col gap-12">
      <TextSection title="О нашем магазине в цифрах" />
      <StatsSection stats={statsData} />
    </section>
  );
};

export default FeatureSection;
