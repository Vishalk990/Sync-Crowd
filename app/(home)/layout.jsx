"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/custom/Sidebar";
import DashboardNavbar from "../../components/custom/DashboardNavbar";
import { useSaveUserToDatabase } from "@/hooks/useSaveUserToDatabase";
import { Toaster } from "@/components/ui/toaster";
import { Smartphone, Monitor } from "lucide-react";

const MobileRedirect = () => {
  return (
    <div className="min-h-screen bg-gradient flex flex-col justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <Smartphone className="w-16 h-16 mx-auto mb-4 text-blue-500" />
        <h1 className="text-2xl font-bold mb-4">Switch to Web View</h1>
        <p className="text-gray-600 mb-6">
          For the best experience, please switch to web view or access this site
          from a desktop browser.
        </p>
        <div className="flex justify-center items-center space-x-2 text-blue-500">
          <Monitor className="w-6 h-6" />
          <span className="font-semibold">Optimized for larger screens</span>
        </div>
      </div>
    </div>
  );
};

function DashboardLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  // useSaveUserToDatabase();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return <MobileRedirect />;
  }

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
