// components/core/TextSection/TextSection.tsx
import Typography from "../../ui/Typography";

interface TextSectionProps {
  title: string;
  className?: string;
}

const TextSection: React.FC<TextSectionProps> = ({ title, className = "" }) => {
  return (
    <div className={`flex flex-col mb-10 pl-[30px] ${className}`}>
      <Typography type="h2" variant="25-900" className="text-left">
        {title}
      </Typography>
    </div>
  );
};

export default TextSection;
