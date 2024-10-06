import React from 'react';
// import './ContentPictureComponent.css'; // Uncomment if you have a CSS file

const ContentPictureComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-8 items-center lg:items-center p-4 lg:p-0 lg:h-screen px-[1.5rem] mx-auto max-w-[1450px]">
      {/* Content Section */}
      <div className="lg:w-1/2 p-4 mt-24 flex flex-col justify-center text-center lg:mt-0 lg:p-0">
        <h1 className="font-montserrat mb-4 font-bold text-gray-700 text-2xl mt-4 sm:text-4xl lg:mt-16 ">
          Wise Numbers LTD
        </h1>
        <p className="text-base lg:text-lg text-gray-700 mt-4 md:mt-12">
          Wise Numbers LTD, is an Expert-Led Accounting Firm, with extensive
          experience in the UK. The firm provides tailored financial services to
          varying client needs. Supported by a skilled team of bookkeepers,
          accountants, and tax experts, Wise Numbers caters to a diverse
          clientele, from freelancers to large organizations. Their services
          include strategic financial consultancy and advanced tax planning,
          making them a trusted partner for achieving financial success and
          peace of mind.
        </p>
      </div>

      {/* Picture Section */}
      <div className="lg:w-1/2 p-4 mt-8 sm:mt-16 lg:mt-0 lg:p-0 flex justify-center">
        <img
          src="/heroSection.png"
          alt="Hero section Image"
          className="rounded-lg w-full  max-w-[320px] sm:max-w-[451px] "
          style={{ height: 'auto' }} // Ensure height is auto to maintain aspect ratio
        />
      </div>
    </div>
  );
};

export default ContentPictureComponent;
