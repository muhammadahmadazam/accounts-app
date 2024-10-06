"use client"

import { motion } from 'framer-motion'

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
  { title: "Self Employed individuals", text: "Chauffeurs, Cleaning Businesses, Home Food Catering, Hairdressers and Nail Salons" },
]

export default function SectorsGrid() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-[#242A33] mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sectors We Serve
        </motion.h2>
        <motion.p 
          className="text-lg text-[#242A33] mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At Wise Numbers LTD, we cater to a diverse clientele across various industries, each with its unique requirements. We meticulously identify all allowable tax expenses specific to each sector, ensuring full compliance with tax regulations while focusing on minimizing tax liabilities for every client we serve, so you can keep most of your earnings!
        </motion.p>
        <motion.p 
          className="text-lg text-[#242A33] mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our Service Sectors include but are not limited to:
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#E5E7EB] rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#242A33] mb-3">{service.title}</h3>
                <p className="text-[#242A33] text-sm">{service.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}