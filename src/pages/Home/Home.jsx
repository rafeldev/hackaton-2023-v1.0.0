import React from "react";
// import { Header } from "../../components/Header/Header";
// import RegisterForm from "../../components/RegisterForm";
// import SubHeader from "../../components/SubHeader";
import Layout from "../../layout";
import UrlDetail from "../../components/UrlDetail";

const Home = () => {
  return (
    <div>
      {/* <RegisterForm /> */}
      <Layout>
        <UrlDetail />
      </Layout>
    </div>
  );
};

export default Home;
