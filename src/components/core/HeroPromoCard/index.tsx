import Typography from "../../../components/ui/Typography";
//import crossImages from "../../../images/products/cross2.png"
//import backImages from "../../../images/products/back.jpg"
const HeroPromoCard: React.FC = () => {
  return (
    <div className="relative w-[615px] h-[369px] ml-auto mr-[40px]">
      {/* Фон */}
      <div className="absolute inset-0">
        <img
          src="/images/products/back.jpg"
          alt="фон"
          className="w-full h-full object-cover filter grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-[#0064FF]/50 mix-blend-screen" />
      </div>

      {/* Содержимое */}
      <div className="relative w-full h-full flex items-center justify-end p-0">
        {/* Фото кроссовка */}
        <img
          src="/images/products/cross2.png"
          alt="кроссовки"
          className="relative z-10 transform -translate-x-[50px] mr-[200px] mt-[140px]"
        />

        {/* Текст */}
        <div className="absolute z-20 left-90 top-[60px] max-w-[250px] text-left text-white">
          <Typography type="h3" variant="16px-bold" className="text-white">
            NIKE AIR JORDAN 1
          </Typography>

          <Typography
            variant="12px-regular"
            type="p"
            className="mt-1 text-white"
          >
            Верх из натуральной красной замши дополнен накладкой с текстурой.
          </Typography>

          <Typography
            variant="12px-bold"
            type="span"
            className="block mt-2 text-white"
          >
            5780 руб.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default HeroPromoCard;