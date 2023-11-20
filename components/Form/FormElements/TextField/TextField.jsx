import React from "react";

const TextField = ({ title, handleChange, name, type }) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="mb-1">{title}</div>
        <input
          type={type}
          name={name}
          className="rounded-[8px] h-[40px] border-[2px] p-1"
          onChange={handleChange}
          required
        />
      </div>
    </>
  );
};

export default TextField;
