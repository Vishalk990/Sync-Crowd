import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="container mx-auto py-8">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold">SyntheticData</div>
        <div className="hidden max-sm:flex items-center">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" onClick={() => setIsSheetOpen(true)}>
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-4">
              <nav className="h-screen space-y-4 flex flex-col">
                <Button onClick={() => setIsSheetOpen(false)}>Get Started</Button>
                <Button variant="ghost" onClick={() => setIsSheetOpen(false)}>Features</Button>
                <Button variant="ghost" onClick={() => setIsSheetOpen(false)}>Pricing</Button>
                <Button variant="ghost" onClick={() => setIsSheetOpen(false)}>About</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="space-x-4 hidden max-sm:hidden">
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">Pricing</Button>
          <Button variant="ghost">About</Button>
          <Button>Get Started</Button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
