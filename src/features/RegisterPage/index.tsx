import React from "react";
import { Link } from "react-router-dom";
import LoginHeader from "../../components/core/LoginHeader";
import LoginButton from "../../components/core/LoginButton";

const RegisterPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-secondary">
      <div className="bg-white rounded-lg shadow-lg p-10 w-[380px] flex flex-col gap-6">
        <LoginHeader text="Регистрация" />

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-secondary rounded px-3 py-2 outline-none focus:border-accent transition"
          />
          <input
            type="password"
            placeholder="Пароль"
            className="border border-secondary rounded px-3 py-2 outline-none focus:border-accent transition"
          />
        </div>

        <LoginButton>Зарегистрироваться</LoginButton>

        <p className="text-center text-secondary opacity-70 text-[14px]">
          Есть аккаунт?{" "}
          <Link to="/login" className="text-accent hover:underline">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
