import React, { useState } from "react";
import { jsPDF } from "jspdf";


const App = () => {
  const [projectName, setProjectName] = useState("");
  const [isIndia, setIsIndia] = useState(true);
  const [deliveryTime, setDeliveryTime] = useState("standard");
  const [selectedAddons, setSelectedAddons] = useState<string[""]>([]);
  const [projectType, setProjectType] = useState("website");
  const [projectSize, setProjectSize] = useState("small");
  const [discount, setDiscount] = useState<number>(0); // Discount percentage
  const [paymentType, setPaymentType] = useState("creditCard"); // Payment Type

  const basePrice = isIndia ? 400 : 11;

  const projectTypes = {
    website: { name: "Web Development", baseMultiplier: 1 },
    aiSolution: { name: "AI Solutions", baseMultiplier: 2 },
    automation: { name: "Automation", baseMultiplier: 1.5 },
  };

  const projectSizes = {
    website: [
      { name: "small", multiplier: 1, description: "Basic (1-3 screen pages)" },
      { name: "medium", multiplier: 1.5, description: "Standard (4-7 screen pages)" },
      { name: "large", multiplier: 2, description: "Advanced (8-12 screen pages)" },
      { name: "enterprise", multiplier: 3, description: "Complex (13+ screen pages)" },
    ],
    aiSolution: [
      { name: "small", multiplier: 1, description: "Proof of Concept" },
      { name: "medium", multiplier: 1.5, description: "Basic Model" },
      { name: "large", multiplier: 2, description: "Advanced Model" },
      { name: "enterprise", multiplier: 3, description: "Custom AI Solution" },
    ],
    automation: [
      { name: "small", multiplier: 1, description: "Single Process Automation" },
      { name: "medium", multiplier: 1.5, description: "Multi-step Workflow" },
      { name: "large", multiplier: 2, description: "Department-wide Automation" },
      { name: "enterprise", multiplier: 3, description: "Enterprise-level Automation" },
    ],
  };

  const deliveryOptions = [
    { name: "standard", description: "Standard (2-3 weeks)", hourlyRate: 500 },
    { name: "fast", description: "Fast (1-2 weeks)", hourlyRate: 800 },
    { name: "express", description: "Express (3-5 days)", hourlyRate: 1000 },
  ];

  const addons = [
    { name: "Urgent Delivery", price: isIndia ? 2000 : 25 },
    { name: "Extra Revisions", price: isIndia ? 1000 : 15 },
    { name: "SEO Optimization", price: isIndia ? 3000 : 45 },
  ];

  const companyDetails = {
    name: "LaunchLeap",
    email: "anshul@launchleap.in",
    phone: "7489989634",
    location: "Online",
    logoUrl: "https://via.placeholder.com/150", // Replace with actual logo URL
  };

  const calculateTotal = () => {
    const selectedDelivery = deliveryOptions.find(option => option.name === deliveryTime);
    const hourlyRate = selectedDelivery?.hourlyRate || 500;

    const selectedSize = projectSizes[projectType].find(size => size.name === projectSize);
    const baseMultiplier = projectTypes[projectType].baseMultiplier;
    const totalHours = selectedSize ? selectedSize.multiplier * 10 : 10;

    let baseProjectPrice = hourlyRate * totalHours * baseMultiplier;

    selectedAddons.forEach(addon => {
      const addonPrice = addons.find(a => a.name === addon)?.price || 0;
      baseProjectPrice += addonPrice;
    });

    const discountedPrice = baseProjectPrice - (baseProjectPrice * discount) / 100;

    return isIndia ? Math.round(discountedPrice) : Math.round(discountedPrice / 80);
  };

  const savePdf = () => {
    const doc = new jsPDF();
    
    // Add company logo
    doc.addImage(companyDetails.logoUrl, "JPEG", 10, 10, 40, 40); 

    doc.setFontSize(16);
    doc.text("Project Billing Details", 60, 20);

    doc.setFontSize(12);
    doc.text(`Project Name: ${projectName}`, 10, 60);
    doc.text(`Project Type: ${projectTypes[projectType].name}`, 10, 70);
    doc.text(`Project Size: ${projectSize}`, 10, 80);
    doc.text(`Delivery Time: ${deliveryOptions.find(option => option.name === deliveryTime)?.description}`, 10, 90);
    doc.text(`Currency: ${isIndia ? "INR" : "USD"}`, 10, 100);
    doc.text(`Payment Type: ${paymentType}`, 10, 110);
    doc.text(`Discount Applied: ${discount}%`, 10, 120);

    doc.setFontSize(14);
    doc.text(`Estimated Total Cost: ${isIndia ? `₹${calculateTotal()}` : `$${calculateTotal()}`}`, 10, 130);

    // Company Info
    doc.text(`Company: ${companyDetails.name}`, 10, 150);
    doc.text(`Email: ${companyDetails.email}`, 10, 160);
    doc.text(`Phone: ${companyDetails.phone}`, 10, 170);
    doc.text(`Location: ${companyDetails.location}`, 10, 180);

    // Add signature placeholder
    doc.text("Signature: ___________________", 10, 200);

    doc.save(`${projectName}_billing.pdf`);
  };

  return (
    <div className="container mx-auto px-4 py-16 text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Billing Section</h1>

      <div className="mb-6">
        <label className="block text-white mb-2">Project Name</label>
        <input
          type="text"
          className="w-full p-3 rounded-md bg-gray-800 text-white"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block text-white mb-2">Project Type</label>
        <select
          className="w-full p-3 rounded-md bg-gray-800 text-white"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
        >
          {Object.entries(projectTypes).map(([key, value]) => (
            <option key={key} value={key}>{value.name}</option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-white mb-2">Project Size</label>
        <select
          className="w-full p-3 rounded-md bg-gray-800 text-white"
          value={projectSize}
          onChange={(e) => setProjectSize(e.target.value)}
        >
          {projectSizes[projectType].map((size) => (
            <option key={size.name} value={size.name}>
              {size.name.charAt(0).toUpperCase() + size.name.slice(1)} - {size.description}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-white mb-2">Delivery Time</label>
        <select
          className="w-full p-3 rounded-md bg-gray-800 text-white"
          value={deliveryTime}
          onChange={(e) => setDeliveryTime(e.target.value)}
        >
          {deliveryOptions.map((option) => (
            <option key={option.name} value={option.name}>
              {option.description} - {isIndia ? `₹${option.hourlyRate}` : `$${Math.round(option.hourlyRate / 80)}`}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-white mb-2">Discount (%)</label>
        <input
          type="number"
          className="w-full p-3 rounded-md bg-gray-800 text-white"
          value={discount}
          onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
        />
      </div>

      <div className="mb-6">
        <label className="block text-white mb-2">Payment Type</label>
        <select
          className="w-full p-3 rounded-md bg-gray-800 text-white"
          value={paymentType}
          onChange={(e) => setPaymentType(e.target.value)}
        >
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bankTransfer">Bank Transfer</option>
        </select>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xl">
          Total Estimate: {isIndia ? `₹${calculateTotal()}` : `$${calculateTotal()}`}
        </p>
        <Button onClick={savePdf}>Download Invoice</Button>
      </div>
    </div>
  );
};

export default App;
