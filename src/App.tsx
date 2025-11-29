import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./features/LoginPage";
import RegisterPage from "./features/RegisterPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route
        path="/login"
        element={
          <AuthLayout>
            <LoginPage />
          </AuthLayout>
        }
      />
      <Route
        path="/register"
        element={
          <AuthLayout>
            <RegisterPage />
          </AuthLayout>
        }
      />
    </Routes>
  );
}

export default App;
