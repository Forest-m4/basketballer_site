import Typography from "../../ui/Typography";

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
  return (
    <div className="flex items-center gap-3">
      <Typography type="span" variant="50-900" color="secondary">
        {number}
      </Typography>
      <Typography type="span" variant="14-400" color="secondary" className="self-center">
        {label}
      </Typography>
    </div>
  );
};

export default StatCard;