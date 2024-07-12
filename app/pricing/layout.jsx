import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import React from "react";


function PricingLayout({ children }) {
  return (
    <div>
      <Navbar/>
      <div className="mx-5 md:mx-20 lg:mx-36">{children}</div>
      <Footer/>
    </div>
  );
}

export default PricingLayout;
