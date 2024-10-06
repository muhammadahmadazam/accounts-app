"use client"

import React from 'react'
import { motion } from 'framer-motion'

const taxServices = [
  { title: "Corporation Tax", text: "Maximize Your Business Savings! Our corporation tax service expertly navigates complex tax regulations to ensure your business stays compliant and optimally positioned." },
  { title: "Self-Assessment Tax", text: "Simplify Your Personal Taxes! Tired of the hassle of tax filing? Our self-assessment tax service makes it effortless. We handle the paperwork, ensure accuracy, and find deductions you might miss." },
  { title: "Inheritance Tax", text: "Protect Your Legacy! Plan your estate effectively with our inheritance tax service. We guide you through estate planning to minimize tax burdens on your heirs." },
  { title: "Landlord Rental Income", text: "Optimize Your Rental Income! Manage your rental property taxes with ease using our specialized service. We assist with accurate reporting and expense identification to reduce your tax liability." },
  { title: "Foreign Income Taxation", text: "Navigate Global Tax Challenges! Our foreign income taxation service manages the complexities of international earnings. We ensure you comply with global tax laws and optimize your tax position." },
  { title: "Remittance-Based Tax", text: "Efficiently Manage Foreign Remittances! If you receive income from abroad, our remittance-based tax service is for you. We help you navigate the tax implications of remitted income and uncover opportunities for tax savings." },
  { title: "Capital Gains Tax", text: "Maximize Your Profits! Selling assets? Our capital gains tax service helps you manage the tax impact efficiently. We guide you through tax obligations and identify ways to reduce liabilities." },
  { title: "Value Added Tax (VAT)", text: "Streamline Your VAT Compliance! Our VAT service offers comprehensive support, from registration to return submissions. We help you navigate VAT regulations and avoid penalties." },
  { title: "Tax Planning", text: "Strategic Tax Solutions! Our tax planning service provides expert advice to optimize your tax strategy. We analyze your financial situation and tailor strategies to reduce your tax burden." },
  { title: "PAYE and Workplace Pension", text: "Efficient Payroll and Pension Management! Simplify your employment tax and pension processes with our PAYE and workplace pension service. We handle the complexities of payroll compliance and employee benefits." },
  { title: "Non-Residential Overseas Income", text: "Seamless Tax Solutions for International Earnings! If you earn income abroad, our non-residential overseas income service provides expert guidance on tax obligations. We help you comply with tax laws both locally and internationally." },
  { title: "Tax Investigations and Disputes", text: "Expert Support for HMRC Inquiries! HMRC conducts several types of tax investigations to ensure compliance. We are experts in dealing with HMRC and can ensure smooth resolution of tax disputes and minimize penalties." }
]

export default function TaxServices() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-[#242A33] mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Tax Services
        </motion.h2>
        <motion.p 
          className="text-lg text-[#242A33] mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At Wise Numbers LTD, we offer a comprehensive range of tax services tailored to meet your specific needs. Our expert team ensures you stay compliant while maximizing your tax savings across various areas of taxation.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {taxServices.map((service, index) => (
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