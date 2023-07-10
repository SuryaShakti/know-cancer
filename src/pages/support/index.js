import React, { useEffect, useState } from "react";

// import AddQADialog from "@/components/Dialogs/AddQ&ADialog";
import SupportDialog from "@/components/Dialogs/SupportDialog";
// import { getAllSupport } from "@/apis/support";

import { PaperClipIcon } from "@heroicons/react/outline";
import { Tab } from "@headlessui/react";
 

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
  // const [open1, setOpen1] = useState(false);

  // const [current, setCurrent] = useState();

  // const [loading, setLoading] = useState("false");
  // const [data, setData] = useState([]);

  // const getData = async () => {
  //   try {
  //     setLoading(true);
  //     const data = await getAllSupport();
  //     console.log(data);
  //     setData(data.data);
  //     setLoading(false);
  //   } catch (error) {
  //     toast.error(error ? error : "Something went wrong", "bottom-right");
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      {" "}
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
                  selected ? "border-b-2 border-[#936CAB]" : "bg-white text-black"
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
                  selected ? "border-b-2 border-[#936CAB]" : "bg-white text-black"
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
              {problems.map((item, index) => (
                <div className=" py-4 px-5 rounded-lg border">
                  <div className="flex justify-between items-center">
                    <div className="w-auto justify-start text-sm text-[#9B75B2] ">
                      Ticket ID: {item.id}
                    </div>
                    <div className="w-auto justify-start text-sm text-[#9B75B2]">
                      User: {item.user}
                    </div>
                  </div>

                  <p className="text-sm pt-4">{item.details}</p>
                  <div className="flex justify-between items-center">
                    <div className="w-auto flex justify-between text-sm text-[#9B75B2] py-2 font-bold">
                      <PaperClipIcon className="h-4 " />
                      View Screenshot
                    </div>
                    <div
                      className="flex py-2 justify-end"
                      onClick={() => setOpen(true)}
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
              {problems.map((item, index) => (
                <div className=" py-4 px-5 rounded-lg border">
                  <div className="flex justify-between items-center">
                    <div className="w-auto justify-start text-sm text-[#9B75B2] ">
                      Ticket ID: {item.id}
                    </div>
                    <div className="w-auto justify-start text-sm text-[#9B75B2]">
                      User: {item.user}
                    </div>
                  </div>

                  <p className="text-sm pt-4">{item.details}</p>
                  <div className="flex justify-between items-center">
                    <div className="w-auto flex justify-between text-sm text-[#9B75B2] py-2 font-bold">
                      <PaperClipIcon className="h-4 " />
                      View Screenshot
                    </div>
                    <div
                      className="flex py-2 justify-end"
                      onClick={() => setOpen(true)}
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
      {/* ----------------------------------------------------------------------------------------------------- */}
      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {problems.map((item, index) => (
          <div className=" py-4 px-5 rounded-lg border">
            <div className="flex justify-between items-center">
              <div className="w-auto justify-start text-sm text-[#9B75B2] ">
                Ticket ID: {item.id}
              </div>
              <div className="w-auto justify-start text-sm text-[#9B75B2]">
                User: {item.user}
              </div>
            </div>

            <p className="text-sm pt-4">{item.details}</p>
            <div className="flex justify-between items-center">
              <div className="w-auto flex justify-between text-sm text-[#9B75B2] py-2 font-bold">
                <PaperClipIcon className="h-4 " />
                View Screenshot
              </div>
              <div
                className="flex py-2 justify-end"
                onClick={() => setOpen(true)}
              >
                <button className="bg-[#936CAB] rounded-md border text-white text-sm px-5 py-1">
                  Resolve
                </button>
              </div>
            </div>
          </div>
        ))}</div> */}
      {/* {data &&
          data?.map((item, index) => (
            <div className=" py-4 px-7 rounded-lg border">
              <div className="flex space-x-2">
                <img
                  src={
                    item?.user?.avatar
                      ? item?.user?.avatar
                      : "/images/image2.png"
                  }
                  className="w-14 rounded-md"
                />
                <div className="text-black font-bold text-lg p-1 ">
                  {item?.user?.name ? item?.user?.name : "N/A"}
                </div>
                <div className="text-gray-800 rounded-md px-2 py-1 h-max border">
                  {item?.status === 2 ? "Solved" : "Unsolved"}
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="grid md:grid-cols-1">
                  <div className="grid md:grid-cols-1">
                    <div className=" text-[#938F99] text-sm ">
                      Ticket Number
                    </div>
                    <div className=" text-black text-sm ">
                      {item.ticketNumber}
                    </div>
                  </div>
                  <div className=" text-[#938F99] text-sm ">Problem</div>
                  <div className=" text-black text-sm ">
                    {item.complainAbout}
                  </div>
                </div>
              </div>
              <div
                className="flex justify-end w-full py-6"
                onClick={() => {
                  setOpen1(true);
                  setCurrent(item);
                }}
              >
                <button className="bg-[#936CAB] rounded-md border text-white px-7 py-1">
                  Resolve
                </button>
              </div>
            </div>
          ))} */}
      <SupportDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Support;
