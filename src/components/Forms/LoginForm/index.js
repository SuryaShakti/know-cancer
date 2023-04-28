import React, { useState } from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import OtpDialog from "../../Dialogs/OtpDialog";

const LoginForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-center">
      <div className="font-bold text-gray-800">Welcome to VitMeds</div>
      <div className="text-gray-500">
        Please enter your phone number to login
      </div>
      <div className="my-5">
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Enter mobile number"
          />
          <div className="absolute inset-y-0 left-0 flex items-center">
            <select
              id="currency"
              name="currency"
              className="h-full rounded-l-md border-0 bg-transparent py-0 pl-1  border-y border-l border-r border-gray-300 bg-gray-200  text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option>+91</option>
              <option>00</option>
              <option>442</option>
            </select>
          </div>
        </div>
      </div>
      <div onClick={() => setOpen(true)}>
        <PrimaryButton text={"OTP"} color={"bg-[#575AE5]"} />
      </div>
      <div className="mt-3">
        By Using the app, you agree to{" "}
        <span className="text-orange-500">Terms</span>
      </div>

      <OtpDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default LoginForm;
