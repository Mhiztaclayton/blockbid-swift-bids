
import React from "react";
import { CheckCircle, Gavel, Search, Tag, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Tag className="h-10 w-10 text-primary" />,
      title: "Blockchain-Based Bid Storage",
      description: "All bids are securely stored on the blockchain, ensuring complete transparency and immutability."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Smart Contract Automation",
      description: "Automatic winner determination and notifications through secure smart contracts."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "User Registration",
      description: "Simple and secure registration process with blockchain wallet integration."
    },
    {
      icon: <Gavel className="h-10 w-10 text-primary" />,
      title: "Item Listing",
      description: "Easily list your items with detailed descriptions and starting bid prices."
    },
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Simplified Bidding",
      description: "Intuitive bidding interface that makes participation easy for both beginners and experts."
    }
  ];

  return (
    <div id="features" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">
          <span className="gradient-text">Features</span> That Set Us Apart
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          BlockBid combines blockchain security with user-friendly design to create
          a next-generation auction platform that's both powerful and easy to use.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="p-6 border rounded-lg hover:shadow-md transition-shadow bg-card"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
