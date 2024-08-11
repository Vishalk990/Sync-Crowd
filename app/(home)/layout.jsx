"use client"
import Footer from "@/components/ui/Footer";
import Sidebar from "@/components/ui/Sidebar";
import React from "react";
import DashboardNavbar from "../../components/custom/DashboardNavbar";
import { useSaveUserToDatabase } from "@/hooks/useSaveUserToDatabase";
import { Toaster } from "@/components/ui/toaster";

function DashboardLayout({ children }) {

  
  useSaveUserToDatabase();

  return (
    <div className="bg-gradient min-h-screen">
      <DashboardNavbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-[300px]">
          {/* Adjust ml-[300px] if your sidebar width is different */}
          <div className="">{children}</div>
        </main>
      </div>
      {/* <Footer /> */}
      <Toaster />
    </div>
  );
}

export default DashboardLayout;



