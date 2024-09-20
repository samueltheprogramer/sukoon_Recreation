import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import NavbarMobile from "./Navbar/NavbarMobile";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Layout = ({ children }) => {
  return (
    <div className=" no-scrollbar   overflow-hidden overscroll-none w-full no-scrollbar  flex flex-col justify-between h-auto">
      <Navbar />
      <NavbarMobile />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
