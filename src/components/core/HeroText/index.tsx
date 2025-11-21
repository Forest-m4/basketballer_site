import Typography from "../../../components/ui/Typography";
import HeroButton from "../../ui/HeroButton";

const HeroText: React.FC = () => {
  return (
    <div className="flex flex-col max-w-[600px] gap-7 pl-10">
      {/* Заголовок */}
      <Typography type="h2" variant="36-900" className="leading-[1.2]">
        Оригинальные и дешёвые товары для спортсменов
      </Typography>

      {/* Описание текстом поменьше и компактнее */}
      <Typography variant="18-400" color="secondary" className="max-w-[350px]">
        Мы собрали настоящие вещи от лучших брендов, чтобы порадовать вас качественным товаром.
      </Typography>

      <HeroButton>
        Смотреть каталог
      </HeroButton>
    </div>
  );
};

export default HeroText;