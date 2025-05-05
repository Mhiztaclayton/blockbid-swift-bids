
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Decentralized Auctions with <span className="gradient-text">BlockBid</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            The future of online auctions powered by blockchain technology.
            Secure, transparent, and automated bidding with smart contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="btn-gradient">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>Blockchain Secured</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>Smart Contracts</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-lg blur-md"></div>
            <div className="relative bg-black/5 border rounded-lg backdrop-blur-sm p-6 shadow-xl">
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">Digital Art Collection #358</h3>
                    <p className="text-sm text-muted-foreground">Current bid: 2.5 ETH</p>
                  </div>
                  <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">Hot</div>
                </div>
                <div className="h-64 bg-gradient-to-r from-primary/30 to-accent/30 rounded-md flex items-center justify-center">
                  <span className="text-white/70 font-medium">Preview Image</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">JD</div>
                    <span className="text-sm font-medium">@cryptoartist</span>
                  </div>
                  <Button size="sm" className="btn-gradient">Place Bid</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
