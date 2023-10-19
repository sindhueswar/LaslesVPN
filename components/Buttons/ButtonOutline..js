import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="text-sm md:text-normal  font-medium tracking-wide p-3 md:py-2 md:px-5  border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange ">
      {children}
    </button>
  );
};

export default ButtonOutline;
