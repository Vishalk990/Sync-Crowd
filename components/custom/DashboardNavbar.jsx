"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ChevronRight, CreditCard, CreditCardIcon, Info, Menu, Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { sidebarLinks } from "@/app/(home)/dashboardContent";
import AnimatedGradientText from "../magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { Progress } from "@/components/ui/progress"




const DashboardNavbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();

  const redirectToAuth = () => {
    router.push("/dashboard");
  };

  useEffect(() => {
    // console.log(path);
  });

  const isInDashboardRoutes = sidebarLinks.some(link => path.startsWith(link.route));

  return (
    <header className="bg-white py-4 px-10 sticky top-0 z-50 shadow-md">
      <nav className="flex justify-between items-center">
        <div
          className="text-2xl font-bold cursor-pointer flex gap-9 items-center"
          onClick={() => router.push("/")}
        >
          SyncCrowd
        </div>

        <div className="hidden lg:flex space-x-4 items-center">
          {isInDashboardRoutes ? (
            <div className="flex gap-3 items-center justify-center">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="z-10 flex items-center justify-center cursor-pointer">
                    <AnimatedGradientText>
                      🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                      <span
                        className={cn(
                          `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                        )}
                      >
                        Credits
                      </span>
                      <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedGradientText>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-4 rounded-xl m-3 bg-gradient-to-br from-blue-100 to-purple-100 shadow-xl">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold flex gap-3 items-center py-2">Credits Information<CreditCardIcon height={20} width={20}/></h4>
                      <Progress value={33} className="h-[6px]"/>
                      <p className="text-sm">
                        Detailed information about credits can go here.
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          Last updated: July 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
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
