import React, { useState } from "react";
import { useRouter } from "next/router";
import { SearchIcon } from "@heroicons/react/outline";
import PatientDataDialog from "@/components/Dialogs/PatientDataDialog";
import DoctorDataDialog from "@/components/Dialogs/DoctorDataDialog";
import DoctorsChart from "@/components/Charts/DoctorsChart";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const router = useRouter();
  return (
    <div className="p-2">
      <div className=" flex justify-between items-center">
        <div className="justify-start font-bold text-[#374151] ">Dashboard</div>

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
        <div className="flex justify-end w-full" >
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
      {/* //---------------------------------------------------------------------------------- */}

      <div className="grid md:grid-cols-10 gap-5 py-10">
        <div className="md:col-span-7">
          <div className="flex justify-between items-center">
            <div className="shadow py-4 px-7 rounded-lg shadow-[0px_4px_4px_#936CAB] ">
              Doctors Joined platform per week
              {/* <DoctorsChart/> */}
            </div>{" "}
            <div className="shadow py-4 px-7 rounded-lg shadow-[0px_4px_4px_#936CAB]">
              No. of patient
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="shadow  py-4 px-7 rounded-lg shadow-[4px_4px_4px_2px_#936CAB] ">
            Q&A
          </div>
        </div>
      </div>

      {/* //------------------------------------------------------------------------ */}

      <div>
        Patient Data
        <button
          className="text-[#936CAB] font-medium text-sm px-10"
          onClick={() => setOpen(true)}
        >
          View All
        </button>
        <div className="shadow py-4 px-7 h-60 border-[#E40411] rounded shadow-[4px_4px_4px_2px_#936CAB] "></div>
      </div>
      <PatientDataDialog open={open} setOpen={setOpen} />
      <div>
        Doctore Data
        <button
          className="text-[#936CAB] font-medium text-sm px-10"
          onClick={() => setOpen1(true)}
        >
          View All
        </button>
        <div className="shadow py-4 px-7 h-80 border-[#E40411] rounded shadow-[4px_4px_4px_2px_#936CAB] ">
          Data
        </div>
      </div>
      <DoctorDataDialog open={open1} setOpen={setOpen1} />
    </div>
  );
};

export default Dashboard;
