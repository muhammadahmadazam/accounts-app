import React from 'react';
import ContentBox from './ContentBox'; // Adjust the import path as necessary

const accountingServices = [
  {
    title: "Bookkeeping - Accurate and Reliable Bookkeeping!",
    text: "From daily transactions to monthly reconciliations, we manage your books with precision. Wise Numbers LTD provides thorough bookkeeping to keep your finances in check."
  },
  {
    title: "Year End Accounts - Clear and Precise Financial Reporting!",
    text: "Ensure your financial statements are accurate and comply with regulations. Wise Numbers LTD prepares your annual accounts, delivering detailed financial reporting to help you comply with companies house and HMRC requirements."
  },
  {
    title: "Strategic Management Accounting - Insights for Smarter Decisions!",
    text: "Gain valuable insights into your business financial performance with our strategic management accounting. Wise Numbers LTD provides the analysis you need for better decision-making, including cash flow, forecast, budgets, and profitability reports."
  },
  {
    title: "VAT Compliance & Digital Reporting - Stay Ahead with VAT and MTD!",
    text: "We manage your VAT returns and digital reporting requirements with ease, ensuring compliance and reducing administrative stress. Wise Numbers LTD keeps your business aligned with the latest VAT regulations. We also support VAT investigations, defending surcharges, defaults, assessments, and penalties imposed by HMRC."
  },
  {
    title: "Self-Employment Tax Solutions - Simplified Tax Filing for Freelancers!",
    text: "Navigate your self-employment taxes with ease. We handle everything from account filing to deductions, helping you save time and money. Wise Numbers LTD makes tax season stress-free."
  },
  {
    title: "Partnership Tax Services - Expert Tax Solutions for Partnerships!",
    text: "Manage your partnership’s tax obligations efficiently. We offer tailored advice to optimize tax outcomes and ensure compliance. Wise Numbers LTD helps your partnership thrive."
  },
  {
    title: "Payroll & Employment Tax Management - Effortless Payroll and Tax Processing!",
    text: "Simplify your payroll and employment tax management with our comprehensive solutions. We ensure accuracy and compliance, so you can focus on running your business. Wise Numbers LTD handles all your payroll needs."
  },
  {
    title: "Construction Industry Tax Services - Specialized Tax Support for Construction!",
    text: "Navigate the complexities of tax regulations in the construction sector with our expert services. Wise Numbers LTD provides tailored solutions to meet industry-specific requirements."
  },
  {
    title: "Company Secretarial – Executive support to your business!",
    text: "Limited companies require secretarial services to comply with the Companies Act Regulations. At Wise Numbers LTD, we provide a wide range of secretarial services such as company formation, annual confirmation statements, advising on corporate governance, managing shareholder records, maintaining board minutes and resolutions, assisting with structural changes like director appointments, company dissolution or liquidation."
  }
];

const AccountingServices = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white pb-24">
      <div className="flex-1 flex flex-col bg-white p-8">
        <div className="mb-8">
          <h1 className="text-3xl text-center font-bold mb-10">Accounting Services</h1>

          <div className='flex flex-col justify-center items-center'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {accountingServices.map((service, index) => (
              <ContentBox key={index} title={service.title} text = {service.text}>
              </ContentBox>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountingServices;