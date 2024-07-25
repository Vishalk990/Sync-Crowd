"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Info, Menu, Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { sidebarLinks } from "@/app/(home)/dashboardContent";

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

  const isInDashboardRoutes = sidebarLinks.some(link => path.startsWith(link.route));

  return (
    <header className="bg-white py-4 px-10 sticky top-0 z-50 shadow-md">
      <nav className="flex justify-between items-center">
        <div
          className="text-2xl font-bold  cursor-pointer flex gap-9 items-center"
          onClick={() => router.push("/")}
        >
          SyncCrowd
        </div>

        <div className="hidden lg:flex space-x-4 items-center">
          {isInDashboardRoutes ? (
            <div className="flex gap-3 items-center justify-center">
              <div className="flex gap-3 border border-slate-400 p-1 rounded-sm items-center justify-center cursor-pointer">
                Credits <Info className="cursor-pointer" fill="#000" color="#fff"/>
              </div>
              <UserButton />
            </div>
          ) : (
            <Button onClick={redirectToAuth}>Get Started</Button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default DashboardNavbar;