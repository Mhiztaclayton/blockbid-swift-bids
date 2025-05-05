
import React from "react";
import { CircleCheck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Connect Your Wallet",
      description: "Link your blockchain wallet to create a secure BlockBid account."
    },
    {
      number: "02",
      title: "Browse or List Items",
      description: "Explore the marketplace or list your own items for auction with ease."
    },
    {
      number: "03",
      title: "Place Bids",
      description: "Securely bid on items with real-time updates and transparent history."
    },
    {
      number: "04",
      title: "Win & Collect",
      description: "Smart contracts automatically handle transactions when you win an auction."
    }
  ];

  return (
    <div id="how-it-works" className="section-container bg-muted/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">
          How <span className="gradient-text">BlockBid</span> Works
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our simplified approach makes blockchain auctions accessible to everyone,
          without the technical complexity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-xl mb-6">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
            
            {index < steps.length - 1 && (
              <div className="hidden lg:block h-0.5 bg-gradient-to-r from-primary to-accent w-full absolute left-1/2 top-8 -z-10"></div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 bg-card border rounded-lg p-8 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-center">Ready to Start?</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <CircleCheck className="h-6 w-6 text-primary mr-3 mt-0.5" />
            <p>No complex setup required - just connect your wallet and begin</p>
          </div>
          <div className="flex items-start">
            <CircleCheck className="h-6 w-6 text-primary mr-3 mt-0.5" />
            <p>Transparent fees with no hidden costs</p>
          </div>
          <div className="flex items-start">
            <CircleCheck className="h-6 w-6 text-primary mr-3 mt-0.5" />
            <p>24/7 support for all your questions and concerns</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button className="btn-gradient px-8 py-3 rounded-lg font-medium">
            Sign Up for Early Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
