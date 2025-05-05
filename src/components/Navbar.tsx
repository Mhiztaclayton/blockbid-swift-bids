
import React from "react";
import { Button } from "@/components/ui/button";
import { Gavel } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const { toast } = useToast();
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isSignupOpen, setIsSignupOpen] = React.useState(false);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful",
      description: "Welcome back to BlockBid! (Demo mode)",
    });
    setIsLoginOpen(false);
  };
  
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account Created",
      description: "Welcome to BlockBid! Your account has been created. (Demo mode)",
    });
    setIsSignupOpen(false);
  };
  
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
          {/* Login Dialog */}
          <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="hidden md:inline-flex">Login</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Login to BlockBid</DialogTitle>
                <DialogDescription>
                  Enter your credentials to access your account.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleLogin} className="space-y-4 pt-4">
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" required />
                </div>
                <div className="flex justify-between items-center pt-2">
                  <Button type="button" variant="ghost" onClick={() => {
                    setIsLoginOpen(false);
                    setIsSignupOpen(true);
                  }}>
                    Need an account?
                  </Button>
                  <Button type="submit">Login</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
          
          {/* Signup Dialog */}
          <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
            <DialogTrigger asChild>
              <Button className="btn-gradient">Sign Up</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create an account</DialogTitle>
                <DialogDescription>
                  Join BlockBid to start bidding on blockchain items.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSignup} className="space-y-4 pt-4">
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input id="signup-name" placeholder="John Doe" required />
                </div>
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input id="signup-email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input id="signup-password" type="password" placeholder="••••••••" required />
                </div>
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="signup-confirm">Confirm Password</Label>
                  <Input id="signup-confirm" type="password" placeholder="••••••••" required />
                </div>
                <div className="flex justify-between items-center pt-2">
                  <Button type="button" variant="ghost" onClick={() => {
                    setIsSignupOpen(false);
                    setIsLoginOpen(true);
                  }}>
                    Already have an account?
                  </Button>
                  <Button type="submit" className="btn-gradient">Sign Up</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
