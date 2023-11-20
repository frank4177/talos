import React from "react";
import Spinner from "../Loaders/Spinner";

const Button = ({title, loader, loading}) => {
  return (
    <>
      <button className="bg-violet-600 text-white h-[33px] rounded-[7px] flex flex-row items-center justify-center gap-2">
        <span>{title}</span> {loading ? loader : null}
      </button>
    </>
  );
};

export default Button;
