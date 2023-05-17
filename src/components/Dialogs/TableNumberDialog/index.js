import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { useRouter } from "next/router";

export default function TableNumberDialog({ open, setOpen }) {
  const [otp, setOtp] = useState("");

  const router = useRouter();

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm text-center transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
                <div className="mt-2">
                  <div className="w-full max-w-xs">
                    {" "}
                    <div className="bg-white p-10 rounded-md">
                      <div className="my-2">
                        <div className="relative mt-2 rounded-md shadow-sm">
                          <input
                            type="text"
                            placeholder="Table number"
                            name="price"
                            id="price"
                            className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="my-2">
                        <div className="relative mt-2 rounded-md shadow-sm">
                          <input
                            type="text"
                            name="price"
                            id="price"
                            placeholder="Seat count"
                            className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div onClick={() => setOpen(true)} className="py-6">
                        <PrimaryButton text={"Add"} color={"bg-[#575AE5]"} />
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
