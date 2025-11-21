import StatCard from "../StatCard";


const StatsSection: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-20">
      <StatCard number="65" label="филиалов по всей стране" />
      <StatCard number="379" label="товаров в каталоге" />
      <StatCard number="4569" label="покупателей" />
      <StatCard number="12" label="часов доставка по городам" />
    </div>
  );
};

export default StatsSection;