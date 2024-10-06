import React from 'react';

const ContentBox = ({ title, text }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white" style={{ fontFamily: "Segoe UI" }}>
      <div className="font-bold text-xl mb-[20px]">{title}</div>
      <p className="text-gray-700 text-base">
        {text}
      </p>
    </div>
  );
};

export default ContentBox;