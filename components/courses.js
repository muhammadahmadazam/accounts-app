"use client"

import { motion } from 'framer-motion'

const services = [
  {
    title: "Bookkeeping",
    description: "For businesses, freelancers, and professionals ensuring precise and timely financial record-keeping."
  },
  {
    title: "Accounting",
    description: "Tailored solutions for sole traders, Ltd Companies, and freelancers, ensuring financial clarity and compliance."
  },
  {
    title: "Self Assessment Tax Returns",
    description: "For individuals, sole traders, and partnerships: simplifying your income reporting to HMRC with expertise and precision."
  },
  {
    title: "Corporation Tax",
    description: "Expert tax solutions for limited companies, ensuring compliance and optimised tax strategies."
  },
  {
    title: "Payroll",
    description: "Managing employee wages and benefits for businesses of all sizes, from startups to established firms."
  },
  {
    title: "VAT Returns",
    description: "Guiding businesses in accurate VAT return submissions, ensuring compliance and maximizing claims."
  },
  {
    title: "Tax Planning",
    description: "Crafting strategic roadmaps for startups, entrepreneurs, and established businesses to drive financial growth."
  },
  {
    title: "Foreign Income Tax",
    description: "For individuals and enterprises with global earnings, navigating UK tax obligations."
  },
  {
    title: "Capital Gains Tax",
    description: "Expert guidance for individuals and businesses on capital gains tax compliance and optimization."
  }
]

export default function ServicesGrid() {
  return (
    <div className="bg-[#E5E7EB] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#242A33] mb-8 text-center">Our Services</h2>
        <p className="text-lg text-[#242A33] mb-12 text-center max-w-3xl mx-auto">
          Our comprehensive business services are tailored to meet the unique needs of each client, offering everything from financial planning and bookkeeping to strategic management advice.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#242A33] mb-3">{service.title}</h3>
                <p className="text-[#242A33] text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="/tax-services"
            className="inline-block bg-[#242A33] text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-300"
          >
            View All Services
          </a>
        </div>
      </div>
    </div>
  )
}