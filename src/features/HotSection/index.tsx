import React from "react";
import Typography from "../../components/ui/Typography";

const HotSection = () => {
  const menuItems = ["Все", "Мячи", "Кроссовки", "Майки", "Шорты"];

  return (
    <section className="w-full py-10 px-20 flex items-center gap-6 mt-20">
      <Typography type="h2" variant="25-900">
        Горячие поступления
      </Typography>

      <nav>
        <ul className="flex gap-16 list-none p-0 m-0 ml-14">
          {menuItems.map((item) => (
            <li key={item}>
              <Typography
                type="a"
                variant="15-400"
                color="secondary"
                className="cursor-pointer transition-colors duration-200 hover:text-primary"
              >
                {item}
              </Typography>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default HotSection;
