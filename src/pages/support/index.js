import React, { useEffect, useState } from "react";

// import AddQADialog from "@/components/Dialogs/AddQ&ADialog";
import SupportDialog from "@/components/Dialogs/SupportDialog";
// import { getAllSupport } from "@/apis/support";

import { PaperClipIcon } from "@heroicons/react/outline";
import { Tab } from "@headlessui/react";
import { toast } from "react-toastify";
import { getAllSupport } from "@/apis/support";

const problems = [
  {
    id: "15875",
    user: "Surya Shakti",
    details:
      "Lorem ipsum dolor sit amet consec. Feugiat magna aliquam quis cursus massa accumsan ultrices. Donec nulla faucibus pellentesque tristique.",
  },
  {
    id: "15875",
    user: "Surya Shakti",
    details:
      "Lorem ipsum dolor sit amet consec. Feugiat magna aliquam quis cursus massa accumsan ultrices. Donec nulla faucibus pellentesque tristique.",
  },
  {
    id: "15875",
    user: "Surya Shakti",
    details:
      "Lorem ipsum dolor sit amet consec. Feugiat magna aliquam quis cursus massa accumsan ultrices. Donec nulla faucibus pellentesque tristique.",
  },
  {
    id: "15875",
    user: "Surya Shakti",
    details:
      "Lorem ipsum dolor sit amet consec. Feugiat magna aliquam quis cursus massa accumsan ultrices. Donec nulla faucibus pellentesque tristique.",
  },
  {
    id: "15875",
    user: "Surya Shakti",
    details:
      "Lorem ipsum dolor sit amet consec. Feugiat magna aliquam quis cursus massa accumsan ultrices. Donec nulla faucibus pellentesque tristique.",
  },
  {
    id: "15875",
    user: "Surya Shakti",
    details:
      "Lorem ipsum dolor sit amet consec. Feugiat magna aliquam quis cursus massa accumsan ultrices. Donec nulla faucibus pellentesque tristique.",
  },
];

const Support = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const [current, setCurrent] = useState();

  const [loading, setLoading] = useState("false");
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      setLoading(true);
      const data = await getAllSupport();
      console.log(data);
      setData(data);
      setLoading(false);
    } catch (error) {
      toast.error(error ? error : "Something went wrong", "bottom-right");
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="w-auto justify-start font-bold text-xl text-[#374151] ">
          Support
        </div>
      </div>
      <Tab.Group>
        <Tab.List>
          <Tab className=" my-4 px-12 py-1 border rounded-md ">
            {({ selected }) => (
              <div
                className={
                  selected
                    ? "border-b-2 border-[#936CAB]"
                    : "bg-white text-black"
                }
              >
                Doctors
              </div>
            )}
          </Tab>
          <Tab className=" my-4 px-12 py-1 border rounded-md ">
            {({ selected }) => (
              <div
                className={
                  selected
                    ? "border-b-2 border-[#936CAB]"
                    : "bg-white text-black"
                }
              >
                Pateints
              </div>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {data
                ?.filter((item, index) => item?.user?.role === 2)
                .map((item, index) => (
                  <div className=" py-4 px-5 rounded-lg border">
                    <div className="flex justify-between items-center">
                      <div className="w-auto justify-start text-sm text-[#9B75B2] ">
                        Ticket ID: {item.ticketNumber}
                      </div>
                      <div className="w-auto justify-start text-sm text-[#9B75B2]">
                        User: {item.user.name}
                      </div>
                    </div>

                    <p className="text-sm pt-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="w-auto flex justify-between text-sm text-[#9B75B2] py-2 font-bold">
                        <PaperClipIcon className="h-4 " />
                        View Screenshot
                      </div>
                      <div
                        className="flex py-2 justify-end"
                        onClick={() => {
                          setCurrent(item);
                          setOpen(true);
                        }}
                      >
                        <button className="bg-[#936CAB] rounded-md border text-white text-sm px-5 py-1">
                          Resolve
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {data
                ?.filter((item, index) => item?.user?.role === 3)
                .map((item, index) => (
                  <div className=" py-4 px-5 rounded-lg border">
                    <div className="flex justify-between items-center">
                      <div className="w-auto justify-start text-sm text-[#9B75B2] ">
                        Ticket ID: {item.id}
                      </div>
                      <div className="w-auto justify-start text-sm text-[#9B75B2]">
                        User: {item.user.name}
                      </div>
                    </div>

                    <p className="text-sm pt-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="w-auto flex justify-between text-sm text-[#9B75B2] py-2 font-bold">
                        <PaperClipIcon className="h-4 " />
                        View Screenshot
                      </div>
                      <div
                        className="flex py-2 justify-end"
                        onClick={() => {
                          setOpen(true);
                          setCurrent(item);
                        }}
                      >
                        <button className="bg-[#936CAB] rounded-md border text-white text-sm px-5 py-1">
                          Resolve
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <SupportDialog open={open} setOpen={setOpen} current={current} />
    </div>
  );
};

export default Support;
