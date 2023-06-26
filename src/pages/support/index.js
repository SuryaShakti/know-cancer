import React, { useEffect, useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import AddQADialog from "@/components/Dialogs/AddQ&ADialog";
import SupportDialog from "@/components/Dialogs/SupportDialog";
import { getAllSupport } from "@/apis/support";

const problems = [
  {
    id: 1,
    name: "Ethel Howard",
    problem: "This is the Problem",
    ticketno: 293810,
  },
  {
    id: 2,
    name: "Ethel Howard",
    problem: "This is the Problem",
    ticketno: 293810,
  },
  {
    id: 3,
    name: "Ethel Howard",
    problem: "This is the Problem",
    ticketno: 293810,
  },
  {
    id: 4,
    name: "Ethel Howard",
    problem: "This is the Problem",
    ticketno: 293810,
  },
  {
    id: 5,
    name: "Ethel Howard",
    problem: "This is the Problem",
    ticketno: 293810,
  },
  {
    id: 6,
    name: "Ethel Howard",
    problem: "This is the Problem",
    ticketno: 293810,
  },
  {
    id: 7,
    name: "Ethel Howard",
    problem: "This is the Problem",
    ticketno: 293810,
  },
  {
    id: 8,
    name: "Ethel Howard",
    problem: "This is the Problem",
    ticketno: 293810,
  },
  {
    id: 9,
    name: "Ethel Howard",
    problem: "This is the Problem",
    ticketno: 293810,
  },
  {
    id: 10,
    name: "Ethel Howard",
    problem: "This is the Problem",
    ticketno: 293810,
  },
  {
    id: 11,
    name: "Ethel Howard",
    problem: "This is the Problem",
    ticketno: 293810,
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
      setData(data.data);
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
      {" "}
      <div className="flex justify-between items-center">
        <div className="justify-start font-semibold text-2xl text-[#374151] ">
          Support
        </div>
        <div className="hidden md:flex items-center">
          <div className="flex border rounded-full px-5 mx-8 w-full">
            <div className="inset-y-0 left-1 flex items-center pointer-events-none">
              <SearchIcon
                className="h-5 w-5 text-black font-light"
                aria-hidden="true"
              />
            </div>
            <input
              id="search-field"
              className="w-80 pr-2 h-full rounded-full pl-5 py-2 bg-gray border-black text-gray-900 placeholder-[#999999] focus:outline-none focus:placeholder-gray-300 focus:ring-0 focus:border-transparent"
              placeholder="Search patient, code, messages...."
              type="search"
              name="search"
            />
          </div>
          <div
            className="flex font-normal text-sm w-full bg-[#936CAB] mr-2"
            onClick={() => setOpen(true)}
          >
            <button className="whitespace-nowrap px-3 py-1 text-sm text-white font-semibold">
              + Add New Q&A
            </button>
          </div>{" "}
          <div className="flex justify-end w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#936CAB"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              />
            </svg>
          </div>
        </div>
        <AddQADialog open={open} setOpen={setOpen} />
      </div>
      {/* ----------------------------------------------------------------------------------------------------- */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {data &&
          data?.map((item, index) => (
            <div className=" py-4 px-7 rounded-lg shadow-[4px_4px_4px_2px_#936CAB]">
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
          ))}
      </div>
      <SupportDialog open={open1} setOpen={setOpen1} current={current} />
    </div>
  );
};

export default Support;
