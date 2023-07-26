import React, { useState } from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { useRouter } from "next/router";
import OtpDialog from "@/components/Dialogs/OtpDialog";
import { loginHandler } from "@/apis/auth";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const saveHandler = async (e) => {
    // await loginHandler(email, password);
    e.preventDefault();

    try {
      setLoading(true);
      const response = await loginHandler(email, password);
      console.log(response);
      localStorage.setItem("token", response.accessToken);
      localStorage.setItem("user", response.user);
      router.push("/dashboard");
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error(error ? error : "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <img
        src={"/images/loginround.png"}
        className="w-28 rounded-md absolute -top-14 left-1/2 -translate-x-1/2 "
      />

      <form
        onSubmit={(e) => saveHandler(e)}
        className="bg-white p-10 py-10 rounded-md w-full"
      >
        <div>
          <div className="text-black pt-10">Email</div>
          <div className="my-2">
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-72 rounded-md border-0 py-1.5 pl-4  text-gray-900 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="text-black pt-2">Password</div>
          <div className="my-2">
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-72 rounded-md border-0 py-1.5 pl-4  text-gray-900 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="rounded-md mt-5 text-white w-full py-2 bg-[#936CAB] hover:bg-[#936CAB]-800"
        >
          {loading ? <BeatLoader className="text-white" /> : "Login"}
        </button>
      </form>

      <OtpDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default LoginForm;
