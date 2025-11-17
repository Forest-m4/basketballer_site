import Typography from "../../../components/ui/Typography";
import HeroButton from "../HeroButton";

const HeroText: React.FC = () => {
  return (
    <div className="flex flex-col max-w-[450px] gap-6 pl-10">
      <Typography type="h2" variant="36px-bold" className="leading-[1.2]">
        Оригинальные и дешёвые товары для спортсменов
      </Typography>

      <Typography variant="16px-regular" className="text-muted">
        Мы собрали настоящие вещи от лучших брендов, чтобы порадовать вас
        качественным товаром.
      </Typography>

      <HeroButton>
        Смотреть каталог
      </HeroButton>
    </div>
  );
};

export default HeroText;