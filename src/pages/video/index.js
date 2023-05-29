import { SearchIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import AddVideoDialog from "@/components/Dialogs/AddVideoDialog";

const Video = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-1 justify-between items-center">
        <div className="w-auto justify-start font-semibold text-xl text-[#374151] ">
          Video
        </div>
        <div className="hidden md:flex items-center md:ml-32">
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
            className="flex font-normal text-sm w-full bg-[#936CAB]"
            onClick={() => setOpen(true)}
          >
            <button>Add Video</button>
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
        <AddVideoDialog open={open} setOpen={setOpen} />
      </div>
      <div className="grid md:grid-cols-4 gap-4 mt-10">
        <div className="shadow py-4 px-3 rounded-lg shadow-[4px_4px_4px_2px_#936CAB]">
          <div
            onClick={() => setOpen1(true)}
            className="text-sm font-normal text-white bg-[#936CAB] flex m-2 p-2 px-7 rounded ml-24 w-fit"
          >
            <button>Approve</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
