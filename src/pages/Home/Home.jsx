import React from "react";
import { Header } from "../../components/Header/Header";
import RegisterForm from "../../components/RegisterForm";

const Home = () => {
  return (
    <div>
      {/* Soy el Home - Página de Inicio */}
      <Header />
      <RegisterForm />
    </div>
  );
};

export default Home;
