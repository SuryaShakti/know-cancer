import LoginForm from "@/components/Forms/LoginForm";
import Image from "next/image";

import OtpForm from "@/components/Forms/OtpForm";
function Home() {
  return (
    <div className="h-screen bg-[#F5EBFC] w-full grid md:grid-cols-2">
      <div className="w-full  flex flex-col justify-center items-center p-10">
        {/* PUT LOGIN SCREEN IMAGE HERE */}
        <div className="text-4xl text-[#936CAD] font-bold mb-4">
          Empowering Healthcare Management
        </div>
        <img src={"/images/loginImage.png"} />
      </div>
      <div className="mainbg flex justify-center items-center flex-col">
        {/* LOGIN FORM SHOULD BE HERE */}
        <LoginForm />

        {/* <OtpForm/> */}
      </div>
    </div>
  );
}

Home.layout = null;

export default Home;
