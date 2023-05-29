import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";

export default function SignUpDialog({ open, setOpen }) {
  const closeModal = () => {
    setOpen(false);
  };
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
          <div className="flex min-h-full items-center justify-center p-4 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
                <div className="mt-2">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-left font-semibold leading-6 text-gray-900"
                  >
                    Question details
                  </Dialog.Title>
                  <div className="h-7 text-[#E61323] text-lg font-['Poppins']">
                    Question- What is Cancer?
                  </div>
                  <div className="font-normal text-sm font-['Poppins']">
                    Consectetur aliquip ipsum amet id occaecat Lorem sit qui.
                    Nostrud sint proident cupidatat voluptate fugiat commodo
                    duis dolore est id. Do sunt cupidatat aute aliqua.
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
