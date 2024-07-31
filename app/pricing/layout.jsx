import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import ReadyToStartHero from "@/components/ui/ReadyToStartHero";
import React from "react";


function PricingLayout({ children }) {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-100">
      <Navbar/>
      <div className="mx-5 md:mx-20 lg:mx-36 ">{children}</div>
      <Footer/>
    </div>
  );
}

export default PricingLayout;
