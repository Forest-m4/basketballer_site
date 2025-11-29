// components/core/StatsSection/StatsSection.tsx
import StatCard from "../StatCard";

interface StatItem {
  number: string;
  label: string;
}

interface StatsSectionProps {
  stats: StatItem[];
  className?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({
  stats,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-wrap justify-center items-center gap-20 ${className}`}
    >
      {stats.map((stat, index) => (
        <StatCard key={index} number={stat.number} label={stat.label} />
      ))}
    </div>
  );
};

export default StatsSection;
