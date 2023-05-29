import React,{useState} from "react";
import OtpInput from "@/components/OtpInput";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

const OtpForm = () => {
  const [otp, setOtp] = useState("");

  return (
    <div className="w-full max-w-sm text-center transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
      
      <div className="mt-2">
        <div
          as="h3"
          className="text-lg text-center font-semibold leading-6 text-gray-900"
        >
          Verification
        </div>
        <p className="text-xs text-gray-500 mb-5 my-3">
          Please check you message for a six-digit security code and enter it
          below.
        </p>
        <OtpInput otp={otp} setOtp={setOtp} />
        <div className="text-xs text-gray-500 mt-5">
          Waiting for OTP... 29 Sec
        </div>
        <div className="my-5" onClick={() => router.push("/dashboard")}>
          <PrimaryButton text={"Login"} color={"bg-[#575AE5]"} />
        </div>
        <div className="text-base mx-auto text-gray-800  font-medium cursor-pointer hover:bg-slate-100 px-2 py-2 rounded-md shadow w-max">
          RESEND OTP
        </div>
      </div>
    </div>
  );
};

export default OtpForm;
