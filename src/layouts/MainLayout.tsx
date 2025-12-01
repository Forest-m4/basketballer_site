import React from "react";
import HeaderSection from "../features/HeaderSection";
import FooterSection from "../features/FooterSection";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const newLocal = "grow";
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderSection
        bgColor="white"
        textColor="secondary"
        logoTitleColor="primary"
      />

      <main className={newLocal}>{children}</main>

      <FooterSection />
    </div>
  );
};

export default MainLayout;
