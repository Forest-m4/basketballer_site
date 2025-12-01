import PromoBackground from "../PromoBackground";
import PromoText from "../PromoText";
import Rectangle from "../../core/Rectangle";

const HeroPromoCard: React.FC = () => {
  return (
    <div className="relative w-[615px] h-[369px] ml-auto mr-10">
      <PromoBackground imageSrc="/images/products/back.jpg" />

      <div className="absolute inset-0 flex items-end justify-end px-5 pb-5">
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

        <div className="absolute bottom-7 right-13 flex gap-4 z-20">
          <Rectangle
            opacity={0.5}
            width="w-10"
            height="h-2"
            className="rounded-none!"
          />
          <Rectangle
            opacity={1}
            width="w-10"
            height="h-2"
            className="rounded-none!"
          />
          <Rectangle
            opacity={0.5}
            width="w-10"
            height="h-2"
            className="rounded-none!"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPromoCard;
