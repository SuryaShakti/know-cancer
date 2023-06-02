import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";

export default function SupportDialog({ open, setOpen }) {
  const closeModal = () => {
    setOpen(false);
  };
  const problems = [
    {
      id: 1,
      name: "Ethel Howard",
      problem: "This is the Problem",
      ticketno: 293810,
    },
  ];

  const router = useRouter();

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
              <Dialog.Panel className="w-full max-w-sm h-60 p-6 text-center transform rounded-2xl shadow-[4px_4px_4px_2px_#936CAB] bg-white p-6 align-middle shadow transition-all">
                <div className="flex space-x-2">
                  <img src={"/images/image2.png"} className="w-14 rounded-md" />
                  <div className="text-black font-bold text-lg p-1 ">
                    Eathel Howard
                  </div>
                </div>
                <div className="grid grid-cols-2 my-2">
                  <div className="grid md:grid-cols-1">
                    <div className=" text-[#938F99] text-sm ">Problem</div>
                    <div className=" text-black text-sm ">
                      This is the Problem
                    </div>
                  </div>
                  <div className="grid md:grid-cols-1">
                    <div className=" text-[#938F99] text-sm ">
                      Ticket Number
                    </div>
                    <div className=" text-black text-sm ">293810</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 my-2">
                  <div className="grid md:grid-cols-1">
                    <div className=" text-[#938F99] text-sm ">
                      Attachment
                    </div>                
                  </div>{" "}
                  <div className="grid md:grid-cols-1">
                    <div className=" text-[#938F99] text-sm ">
                      Ticket Status
                    </div>
                  </div>
                </div>
                <div
                  className="flex justify-end w-full py-2"
                  onClick={() => setOpen1(true)}
                >
                  <button className="bg-[#936CAB] rounded-md border text-white px-7 py-1">
                    Resolve
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
