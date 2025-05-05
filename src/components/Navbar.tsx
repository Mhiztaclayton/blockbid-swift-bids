
import React from "react";
import { Button } from "@/components/ui/button";
import { Gavel } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <Gavel className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">BlockBid</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How It Works</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">About</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex">Login</Button>
          <Button className="btn-gradient">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
