"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input"; // Importing the search bar input component from ShadCN
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
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
    <header className="container mx-auto py-8">
      <nav className="flex justify-between items-center">
        <div
          className="text-2xl font-bold  cursor-pointer"
          onClick={() => router.push("/")}
        >
          SyncCrowd
        </div>
        <div className="flex lg:hidden items-center">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" onClick={() => setIsSheetOpen(true)}>
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-4">
              <nav className="h-screen space-y-4 flex flex-col">
                <Button onClick={() => setIsSheetOpen(false)}>
                  Get Started
                </Button>
                <Button variant="ghost" onClick={() => setIsSheetOpen(false)}>
                  Platform
                </Button>
                <Button variant="ghost" onClick={() => setIsSheetOpen(false)}>
                  Use Cases
                </Button>
                <Button variant="ghost" onClick={() => setIsSheetOpen(false)}>
                  Resources
                </Button>
                <Button variant="ghost" onClick={() => setIsSheetOpen(false)}>
                  Pricing
                </Button>
                <Button variant="ghost" onClick={() => setIsSheetOpen(false)}>
                  Docs
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex space-x-4 items-center">
          <Button variant="ghost">Platform</Button>
          <Button variant="ghost">Use Cases</Button>
          <Button variant="ghost">Resources</Button>
          <Button variant="ghost" onClick={() => router.push("/pricing")}>
            Pricing
          </Button>
          <Button variant="ghost" onClick={()=>router.push("/docs")}>Docs</Button>
          <Input placeholder="Search" className="w-64" />{" "}
          {/* Adding the search bar */}
          <Button onClick={redirectToAuth}>Login</Button>{" "}
          {/* Adding the Login button */}
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

export default Navbar;
