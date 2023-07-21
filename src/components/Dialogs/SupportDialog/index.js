import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { resolveSupport } from "@/apis/support";
import { toast } from "react-toastify";

export default function SupportDialog({ open, setOpen, current }) {
  const [loading, setLoading] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };

  const router = useRouter();

  const saveHandler = async (id) => {
    try {
      setLoading(true);
      const response = await resolveSupport(id);
      console.log(response);
      setLoading(false);
      toast.success("Support ticket resolved successfully");
      setOpen(false);
    } catch (error) {
      toast.error(error ? error : "Something went wrong", "bottom-right");
      setLoading(false);
    }
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
              <Dialog.Panel className="w-full max-w-md h-fit transform rounded-md bg-white shadow transition-all">
                <div className="flex space-x-2">
                  <div className="Background w-full h-16 flex ">
                    <div className="p-4 font-bold text-lg">Support</div>{" "}
                    <div className=" sm:flex items-center">
                      <div className=" font-normal text-sm w-full bg-[#FCE7F3] mr-2 rounded-xl">
                        <button className="whitespace-nowrap px-3 py-1 text-sm text-[#9D174D] font-semibold">
                          Ticket Id: {current?.ticketNumber}
                        </button>
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <div className="w-auto justify-start text-sm text-[#7E7E7E] px-4">
                    Customer name
                    <div className="text-black">{current?.user?.name}</div>
                  </div>
                  <div className="w-auto justify-start text-sm text-[#7E7E7E] px-4">
                    Date
                    <div className="text-black">
                      {current?.updatedAt.slice(0, 10)}
                    </div>
                  </div>
                </div>
                <div className=" flex w-auto justify-start text-sm text-[#7E7E7E] px-4 pt-4">
                  Ticket for product/service
                </div>
                <div className="flex text-black text-sm px-4">
                  {current?.product ? current?.product : "Consultation"}
                </div>
                <div className=" flex w-auto justify-start text-sm text-[#7E7E7E] px-4 pt-4">
                  Email
                </div>
                <div className="flex text-black text-sm px-4">
                  {current?.user?.email ? current?.user?.email : "N/A"}
                </div>
                <div className=" flex w-auto justify-start text-sm text-[#7E7E7E] px-4 pt-4">
                  Description
                </div>
                <div className="text-left text-black text-sm px-4 ">
                  {current?.description}
                </div>
                <div className=" flex w-auto justify-start text-sm text-[#7E7E7E] px-4 pt-4">
                  Images
                </div>
                <div className="flex text-black text-sm px-2">
                  <img src={current?.attachments} className="w-20" />
                </div>
                <div
                  className="justify-center font-normal text-sm w-fit bg-[#936CAB] rounded-md my-4 mt-16 ml-36"
                  onClick={() => setOpen(true)}
                >
                  <button
                    onClick={() =>
                      (window.location.href = `tel:${current?.user?.phone}`)
                    }
                    className="whitespace-nowrap px-16 py-1 text-sm text-white font-semibold"
                  >
                    Call
                  </button>
                </div>{" "}
                {/* <div className="flex space-x-2">
                  <img
                    src={
                      current?.user?.avatar
                        ? current?.user?.avatar
                        : "/images/image2.png"
                    }
                    className="w-14 rounded-md"
                  />
                  <div className="text-black font-bold text-lg p-1 ">
                    {current?.user?.name ? current?.user?.name : "N/A"}
                  </div>
                </div>
                <div className="grid grid-cols-2 my-2">
                  <div className="grid md:grid-cols-1">
                    <div className=" text-[#938F99] text-sm ">Problem</div>
                    <div className=" text-black text-sm ">
                      {current?.complainAbout ? current?.complainAbout : "N/A"}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-1">
                    <div className=" text-[#938F99] text-sm ">
                      Ticket Number
                    </div>
                    <div className=" text-black text-sm ">
                      {current?.ticketNumber}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 my-2">
                  <div className="grid md:grid-cols-1">
                    <div className=" text-[#938F99] text-sm ">Attachment</div>
                    <img src={current?.attachments} />
                  </div>{" "}
                  <div className="grid md:grid-cols-1">
                    <div className=" text-[#938F99] text-sm ">
                      Ticket Status
                    </div>
                    <div className="text-gray-800 rounded-md w-max mx-auto px-2 py-1 h-max border">
                      {current?.status === 2 ? "Solved" : "Unsolved"}
                    </div>
                  </div>
                </div>
                <div
                  className="flex justify-end w-full py-2"
                  onClick={() => saveHandler(current._id)}
                >
                  <button className="bg-[#936CAB] rounded-md border text-white px-7 py-1">
                    Resolve
                  </button>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
