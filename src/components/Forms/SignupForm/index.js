import { useState } from "react";
import React from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import OtpInput from "@/components/OtpInput";


const SignupForm = () => {
  const [open, setOpen] = useState(false);
  const [otp, setOtp] = useState("");

  return (
    <div className="w-3/5">
      {" "}
      <div className="font-bold text-gray-800 text-center text-lg ">
        Sign Up
      </div>
      <div className="bg-white p-7 rounded-md">
        <div className="text-gray-500 ">Add your profile picture</div>
        <img src={"/images/Ellipse1.png"} className="w-14 rounded-md" />

        <div className="text-gray-500 ">Your name</div>
        <div className="my-2">
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="text-gray-500 ">Phone number</div>
        <div className="my-2">
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="text-gray-500">OTP</div>
        <div className="my-3">
          <OtpInput otp={otp} setOtp={setOtp} />
          {/* <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div> */}
        </div>
        <div className=" grid md:grid-cols-2">
          <div>
            {" "}
            <div className="text-gray-500">Gender</div>
            <div className="my-2 mx-2">
              <div className="relative mt-2 rounded-md shadow-sm">
                <select
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="text-gray-500">Speciality</div>
            <div className="my-2 mx-2">
              <div className="relative mt-2 rounded-md shadow-sm">
                <select
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="text-gray-500">State</div>
            <div className="my-2 mx-2">
              <div className="relative mt-2 rounded-md shadow-sm">
                <select
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="text-gray-500">Language</div>
            <div className="my-2 mx-2">
              <div className="relative mt-2 rounded-md shadow-sm">
                <select
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div onClick={() => setOpen(true)}>
          <PrimaryButton text={"Next"} color={"bg-[#575AE5]"} />
        </div>
      </div>
      <div className="mt-3 text-center">
        Already have an account?
        <span className="text-orange-500">Sign in</span>
      </div>
    </div>
  );
};

export default SignupForm;
