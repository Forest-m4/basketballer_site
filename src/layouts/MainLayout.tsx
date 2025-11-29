import React from "react";
import HeaderSection from "../features/HeaderSection";
import Footer from "../features/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const newLocal = "grow";
  return (
    <div className="min-h-screen flex flex-col">
      {/* Хедер - БАСКЕТБОЛЕР синий */}
      <HeaderSection
        bgColor="white"
        textColor="secondary"
        logoTitleColor="primary"
      />

      {/* Основной контент */}
      <main className={newLocal}>{children}</main>

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default MainLayout;
