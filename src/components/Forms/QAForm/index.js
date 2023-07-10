import { useState } from "react";
import React from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";

const QAForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-lg px-7">
      {" "}
      <div className="font-bold text-gray-800 text-left text-xl py-3">
        ADD Information
      </div>
      <div className="shadow py-4 px-5 rounded-lg shadow-[0px_2px_4px_0px_#936CAB]">
        <div className="text-black text-left font-bold">Question:</div>
        <div>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              placeholder="What is Cancer?"
              className="block w-full rounded-md py-1 px-2 bg-[#3232470F] text-[#000000] placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="text-black text-left font-bold">
          Choose Your Preference
        </div>
        <div className="text-left ">
          <input type="radio" id="text" name="text" value="Text" />
          <label for="Text" className="px-2 font-semibold">
            Text
          </label>
          <br />
          <input type="radio" id="video" name="video" value="Video" />
          <label for="css" className="px-2 font-semibold">
            Video
          </label>
          <br />
          <input type="radio" id="both" name="both" value="both" />
          <label for="both" className="px-2 font-semibold">
            Both
          </label>
        </div>

        <div className="text-black text-left font-bold">Answer:</div>
        <div>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Cancer is a complex and diverse group of diseases Cancer is a complex and diverse group of diseases "
              className="block w-full h-16 rounded-md py-1 px-2 bg-[#3232470F] text-[#000000] placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="text-black font-bold text-left">Link</div>
        <div>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              placeholder="willie.jennings@example.com"
              className="block w-full rounded-md py-1 px-2 bg-[#3232470F] text-[#000000] placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="text-black font-bold text-left">Intent</div>
        <div>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Heal Cancer"
              className="block w-full rounded-md py-1 px-2 bg-[#3232470F] text-[#000000] placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div onClick={() => setOpen(true)} className="py-4 w-3/4 ml-8">
        <PrimaryButton text={"Upload"} color={"bg-[#936CAB]"} />
      </div>
    </div>
  );
};

export default QAForm;
