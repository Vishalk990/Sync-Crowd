"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

const DashboardNavbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();

  const redirectToAuth = () => {
    router.push("/dashboard");
  };

  useEffect(() => {
    console.log(path);
  });


  return (
    <header className="mx-auto py-8 px-10 sticky top-0 z-50 bg-gradient-to-br from-blue-100 to-purple-100 shadow-md">
      <nav className="flex justify-between items-center">
        <div
          className="text-2xl font-bold  cursor-pointer flex gap-9 items-center"
          onClick={() => router.push("/")}
        >
          SyncCrowd
        </div>


        <div className="hidden lg:flex space-x-4 items-center">
          {path === "/dashboard" ? (
            <UserButton />
          ) : (
            <Button onClick={redirectToAuth}>Get Started</Button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default DashboardNavbar;
