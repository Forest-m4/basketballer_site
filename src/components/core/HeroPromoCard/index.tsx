import PromoBackground from "../PromoBackground";
import PromoText from "../PromoText";

const HeroPromoCard: React.FC = () => {
  return (
    <div className="relative w-[615px] h-[369px] ml-auto mr-[40px]">
      <PromoBackground imageSrc="/images/products/back.jpg" />

      <div className="absolute inset-0 flex items-end justify-end px-[20px] pb-[20px]">
        <img
          src="/images/products/cross2.png"
          alt="кроссовки"
          className="relative z-10 w-[615px] h-auto -mb-[90px] right-[250px]"
        />

        <PromoText
          title="NIKE AIR JORDAN 1"
          description="Верх из натуральной красной замши дополнен накладкой с текстурой."
          price="5780 руб."
          className="absolute left-6 top-6"
        />
      </div>
    </div>
  );
};

export default HeroPromoCard;