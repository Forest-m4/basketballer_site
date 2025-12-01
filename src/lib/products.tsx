export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discount?: number;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Баскетбольный мяч",
    description:
      "Кроссовки Air Jordan 5 Retro 'Top 3'  Закругленный носок, плоская резиновая подошва.",
    price: 2499,
    discount: 300,
    imageUrl: "/images/products/ball2.png",
  },
  {
    id: 2,
    title: "Кроссовки AIR JORDAN",
    description:
      "Кроссовки Air Jordan 5 Retro 'Top 3' Закругленный носок, плоская резиновая подошва.",
    price: 1999,
    discount: 250,
    imageUrl: "/images/products/cros2.jpg",
  },
  {
    id: 3,
    title: "Майка JORDAN SPORT",
    description:
      "Футболка Nike НБА Dri-FIT Miami Heat выполнена в стиле джерси City, в которых играет команда.",
    price: 1599,
    discount: 250,
    imageUrl: "/images/products/shirt.jpg",
  },
  {
    id: 4,
    title: "Шорты баскетбольные",
    description:
      "Шорты  JBS-1120-014 свободного кроя для отличного комфорта  во время игры.",
    price: 2299,
    discount: 400,
    imageUrl: "/images/products/shorts.jpg",
  },
  {
    id: 5,
    title: "Баскетбольный мяч",
    description:
      "Мягкий материал мяча обеспечивает превосходный контакт с мячом во время игры.",
    price: 1899,
    discount: 250,
    imageUrl: "/images/products/ball1.jpg",
  },
  {
    id: 6,
    title: "Кроссовки NIKE LEBRON XVII",
    description:
      " Большая вставка разработана именно для Расса и выделена линиями, придающими такую форму.",
    price: 1699,
    discount: 200,
    imageUrl: "/images/products/cross1.jpg",
  },
  {
    id: 7,
    title: "Майка new york",
    description:
      "Футболка Nike НБА NEW YOURK Logo выполнена в стиле City Edition, в которых играет моя команда.",
    price: 2199,
    discount: 250,
    imageUrl: "/images/products/shirt1.jpg",
  },
  {
    id: 8,
    title: "Шорты баскетбольные",
    description:
      "Повседневный стиль сочетается в шортах Jordan Jumpman Air TOP И дарит ощущение свободы.",
    price: 1799,
    discount: 250,
    imageUrl: "/images/products/shorts_b.jpg",
  },
];
