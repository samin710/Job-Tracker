import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";

const MainLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
