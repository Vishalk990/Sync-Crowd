"use client"
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import { UserButton } from "@clerk/nextjs";

import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Sidebar/>
    </>
  );
};

export default page;
