import { useState } from "react";
import React from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";


const QAForm = () => {
      const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-lg p-5">
      
      {" "}
      <div className="font-bold text-gray-800 text-left text-xl py-5">
        ADD Q&A
      </div>
      <div className="shadow py-8 px-5 rounded-lg shadow-[0px_2px_4px_0px_#936CAB]">
        <div className="text-black text-left font-bold">Question:</div>
        <div className="my-2">
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md py-1.5 px-2 bg-[#3232470F] text-[#000000] placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="text-black text-left font-bold">Answer:</div>
        <div className="my-2">
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md py-1.5 px-2 bg-[#3232470F] text-[#000000] placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="text-black font-bold text-left">Intent</div>
        <div className="my-2">
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md py-1.5 px-2 bg-[#3232470F] text-[#000000] placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div onClick={() => setOpen(true)} className="py-8 w-3/4 ml-8">
        <PrimaryButton text={"Add"} color={"bg-[#936CAB]"} />
      </div>
    </div>
  );
};

export default QAForm;
