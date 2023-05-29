import React, { useState } from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { useRouter } from "next/router";
import OtpDialog from "@/components/Dialogs/OtpDialog";

const LoginForm = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="relative">
      <img
        src={"/images/loginround.png"}
        className="w-28 rounded-md absolute -top-14 left-1/2 -translate-x-1/2 "
      />

      <div className="bg-white p-10 py-10 rounded-md w-full">
        <div className="text-black pt-10">Phone number</div>
        <div className="my-2">
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
            {/* <div className="absolute inset-y-0 left-0 flex items-center border-r px-2">
            <select
              id="currency"
              name="currency"
              className="h-full rounded-l-md border-0 bg-transparent py-0 pl-1  border-y border-l border-r border-gray-300 bg-gray-200  text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option>+91</option>
              <option>00</option>
              <option>442</option>
            </select> 
             +91
          </div> */}
          </div>
        </div>
            {/* <div className="text-black">OTP</div>
            <div className="my-2">
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

        <div className="py-8" onClick={() => setOpen(true )}>
          <PrimaryButton text={"Send OTP"} color={"bg-[#575AE5]"} />
        </div>
      </div>

      <OtpDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default LoginForm;
