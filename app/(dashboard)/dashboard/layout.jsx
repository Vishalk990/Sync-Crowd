import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import ReadyToStartHero from "@/components/ui/ReadyToStartHero";
import Sidebar from "@/components/ui/Sidebar";
import React from "react";
import DashboardNavbar from "./_components/DashboardNavbar";

function DashboardLayout({ children }) {
  return (
    <div className="bg-gradient">
      <DashboardNavbar/>
      <Sidebar />
      <div className="mx-5 md:mx-20 lg:mx-36 ">{children}</div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
