import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PrimaryButton = ({ text, color }) => {
  return (
    <button
      className={classNames(
        color,
        "rounded-md text-white w-full py-2 bg-[#936CAB] hover:bg-[#936CAB]-800"
      )}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
