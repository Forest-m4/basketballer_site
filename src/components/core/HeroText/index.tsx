import Typography from "../../../components/ui/Typography";
import HeroCatalogButton from "../HeroCatalogButton";
import SmallSquare from "../../ui/SmallSquare";

const HeroText: React.FC = () => {
  return (
    <div className="flex flex-col max-w-[600px] gap-7 pl-10 relative">
      {/* Белый квадратик 3x3 в левом верхнем углу текста */}
      <div className="absolute mt-2 -right-122 z-10">
        <SmallSquare size="sm" /> {/* 3x3 (w-3 h-3 = 12px) */}
      </div>

      <Typography type="h2" variant="36-900" className="leading-[1.2]">
        Оригинальные и дешёвые товары для спортсменов
      </Typography>

      <Typography variant="18-400" color="secondary" className="max-w-[350px]">
        Мы собрали настоящие вещи от лучших брендов, чтобы порадовать вас
        качественным товаром.
      </Typography>

      <HeroCatalogButton>Смотреть каталог</HeroCatalogButton>
    </div>
  );
};

export default HeroText;
