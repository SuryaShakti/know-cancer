import { useState } from "react";
import React from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";


const QAForm = () => {
      const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-xs">
      {" "}
      <div className="font-bold text-gray-800 text-left text-xl ">ADD Q&A</div>
      <div className="bg-white p-10 rounded-md">
        <div className="text-black font-bold">Question:</div>
        <div className="my-2">
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="text-black font-bold">Answer:</div>
        <div className="my-2">
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="text-black font-bold">intent</div>
        <div className="my-2">
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div onClick={() => setOpen(true)}>
          <PrimaryButton text={"Approve"} color={"bg-[#575AE5]"} />
        </div>
      </div>
    </div>
  );
};

export default QAForm;
