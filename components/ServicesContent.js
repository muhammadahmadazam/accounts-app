import React from 'react';
import ContentBox from './ContentBox';
const LogoComponent = () => {
  const services = [
    { title: "Healthcare", text: "Medical practices, GPs, dentists, supported living, and care homes." },
    { title: "Construction", text: "Contractors, builders, and construction management firms." },
    { title: "Real Estate", text: "Property management, real estate agencies, and developers." },
    { title: "Retail", text: "Shops, e-commerce businesses on Shopify, Amazon, and TikTok." },
    { title: "Hospitality", text: "Hotels, restaurants, and event venues." },
    { title: "Car Dealerships", text: "Car garages, mechanics, paint, and spare parts shops." },
    { title: "Financial Services", text: "Mortgage brokers, insurance and investment firms, and financial advisors." },
    { title: "Professional Services", text: "Legal firms, consulting agencies, and marketing companies." },
    { title: "Education", text: "Schools, colleges, universities, and educational institutions." },
    { title: "Technology", text: "IT firms, software companies, and tech startups." },
    { title: "Non-Profit Organizations", text: "Charities, foundations, and community organizations." },
    { title: "Transport and Logistics", text: "Shipping companies, freight carriers, and logistics providers." },
    { title: "Entertainment and Media", text: "Film production, music, publishing, and media companies." },
    { title: "Agriculture", text: "Farms, agricultural businesses, and agribusinesses." },
    { title: "Energy and Utilities", text: "Oil, gas, renewable energy, and utility companies." },
    { title: "Self Employeed individuals", text: "Chauffeurs, Cleaning Businesses, Home Food Catering, Hairdressers and Nail Salons" },
  ];
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white pb-24">
      {/* Left Side: Content Section */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white p-8">

        {/* Accounting Services Section */}
        <div className="text-left">
          <h3 className="text-3xl text-center font-bold mb-10">Sectors We Serve</h3>
          <p className="mb-4">
            At Wise Numbers LTD, we cater to a diverse clientele across various industries, each with its unique requirements. We meticulously identify all allowable tax expenses specific to each sector, ensuring full compliance with tax regulations while focusing on minimizing tax liabilities for every client we serve, so you can keep most of your earnings!
          </p>
          <p className="mb-4">
            Our Service Sectors include but are not limited to:
          </p>
          <div className='flex flex-col justify-center items-center '>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
              {services.map((service, index) => (
                <ContentBox key={index} title={service.title} text={service.text}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoComponent;
