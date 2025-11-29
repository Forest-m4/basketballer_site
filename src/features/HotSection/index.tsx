import React from "react";
import Typography from "../../components/ui/Typography";
import HeaderNavItem from "../../components/core/HeaderNavItem";

const HotSection = () => {
  return (
    <section className="w-full py-10 px-20 font-montserrat flex items-center gap-6">
      <Typography type="h2" variant="25-900">
        Горячие поступления
      </Typography>

      <ul className="flex gap-16 items-center list-none p-0 m-0 ml-14">
        <HeaderNavItem text="Все" textColor="secondary" />
        <HeaderNavItem text="Мячи" textColor="secondary" />
        <HeaderNavItem text="Кроссовки" textColor="secondary" />
        <HeaderNavItem text="Майки" textColor="secondary" />
        <HeaderNavItem text="Шорты" textColor="secondary" />
      </ul>
    </section>
  );
};

export default HotSection;
