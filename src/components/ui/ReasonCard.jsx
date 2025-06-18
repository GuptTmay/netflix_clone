import React from 'react';

const ReasonCard = ({ title, para, svg }) => {
  return (
    <div className="flex h-55 w-full flex-col rounded-2xl bg-[linear-gradient(153deg,_#192246_0%,_#210E17_97%)] px-5 py-6 md:w-sm lg:h-80 lg:w-3xs">
      <h2 className="mb-2 text-start text-lg font-semibold text-white md:text-2xl">
        {title}
      </h2>
      <p className="sm:text-md flex-1 text-sm text-gray-300">{para} </p>
      <div className="self-end lg:mt-14">{svg}</div>
    </div>
  );
};

export default ReasonCard;
