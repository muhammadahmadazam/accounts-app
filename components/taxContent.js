import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ContentBox from './ContentBox'; // Adjust the import path as necessary

const taxServices = [
  { title: "Corporation Tax", text: "Maximize Your Business Savings! Our corporation tax service expertly navigates complex tax regulations to ensure your business stays compliant and optimally positioned. At Wise Numbers LTD, we streamline tax processes and uncover savings opportunities to keep more money in your business." },
  { title: "Self-Assessment Tax", text: "Simplify Your Personal Taxes! Tired of the hassle of tax filing? Our self-assessment tax service makes it effortless. We handle the paperwork, ensure accuracy, and find deductions you might miss. With Wise Numbers LTD, you can confidently file your taxes and potentially save more." },
  { title: "Inheritance Tax", text: "Protect Your Legacy! Plan your estate effectively with our inheritance tax service. We guide you through estate planning to minimize tax burdens on your heirs. Wise Numbers LTD helps you structure your assets to preserve your wealth for future generations." },
  { title: "Landlord Rental Income", text: "Optimize Your Rental Income! Manage your rental property taxes with ease using our specialized service. We assist with accurate reporting and expense identification to reduce your tax liability. At Wise Numbers LTD, we ensure you keep more of your rental income." },
  { title: "Foreign Income Taxation", text: "Navigate Global Tax Challenges! Our foreign income taxation service manages the complexities of international earnings. We ensure you comply with global tax laws and optimize your tax position. Wise Numbers LTD makes managing overseas income straightforward and efficient." },
  { title: "Remittance-Based Tax", text: "Efficiently Manage Foreign Remittances! If you receive income from abroad, our remittance-based tax service is for you. We help you navigate the tax implications of remitted income and uncover opportunities for tax savings. Trust Wise Numbers LTD to simplify your international tax matters." },
  { title: "Capital Gains Tax", text: "Maximize Your Profits! Selling assets? Our capital gains tax service helps you manage the tax impact efficiently. We guide you through tax obligations and identify ways to reduce liabilities. Wise Numbers LTD ensures you retain more of your gains." },
  { title: "Value Added Tax (VAT)", text: "Streamline Your VAT Compliance! Our VAT service offers comprehensive support, from registration to return submissions. We help you navigate VAT regulations and avoid penalties. At Wise Numbers LTD, we make VAT management easy and stress-free." },
  { title: "Tax Planning", text: "Strategic Tax Solutions! Our tax planning service provides expert advice to optimize your tax strategy. We analyze your financial situation and tailor strategies to reduce your tax burden. Wise Numbers LTD empowers you with smart planning to enhance your financial success." },
  { title: "PAYE and Workplace Pension", text: "Efficient Payroll and Pension Management! Simplify your employment tax and pension processes with our PAYE and workplace pension service. We handle the complexities of payroll compliance and employee benefits. Wise Numbers LTD ensures smooth administration and regulatory adherence." },
  { title: "Non-Residential Overseas Income", text: "Seamless Tax Solutions for International Earnings! If you earn income abroad, our non-residential overseas income service provides expert guidance on tax obligations. We help you comply with tax laws both locally and internationally. Wise Numbers LTD makes managing non-residential income hassle-free." },
  { title: "Tax Investigations and Disputes", text: "HMRC conducts several types of tax investigations to ensure compliance with tax laws, including full inquiries, aspect inquiries, and random checks. Investigations can be done on Self-Assessment, VAT, PAYE, Contractors Tax, Capital Gains Tax, Rental Income Disclosure Requirements, and Tax Fraud Investigations (COP9). At Wise Numbers LTD, we are experts in dealing with HMRC and can ensure smooth resolution of tax disputes and minimize penalties." }
];

const LogoComponent = () => {
  const [hoveredCity, setHoveredCity] = useState(null);
  const router = useRouter();

  const handleClick = () => {
    router.push('/story');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white pb-24">
      {/* Left Side: Content Section */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white p-8">
        {/* Tax Services Section */}
        <div className="text-left">
          <h3 className="text-3xl text-center font-bold mb-10">Tax Services:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {taxServices.map((service, index) => (
              <ContentBox key={index} title={service.title} text={service.text}>
              </ContentBox>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoComponent;