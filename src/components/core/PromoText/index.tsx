import Typography from "../../../components/ui/Typography";

interface PromoTextProps {
  title: string;
  description: string;
  price: string;
  className?: string;
}

const PromoText: React.FC<PromoTextProps> = ({
  title,
  description,
  price,
  className,
}) => {
  return (
    <div
      className={`absolute z-20 left-90 top-[60px] max-w-[250px] text-left text-white ${className}`}
    >
      <Typography type="h3" variant="17-700" color="white">
        {title}
      </Typography>

      <Typography variant="12-400" type="p" color="white" className="mt-1">
        {description}
      </Typography>

      <Typography
        variant="12-700"
        type="span"
        color="white"
        className="block mt-2"
      >
        {price}
      </Typography>
    </div>
  );
};

export default PromoText;
