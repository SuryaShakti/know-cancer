import React, { useState } from "react";
import { useRouter } from "next/router";
import { DocumentDownloadIcon, SearchIcon } from "@heroicons/react/outline";
import PatientDataDialog from "@/components/Dialogs/PatientDataDialog";
import DoctorDataDialog from "@/components/Dialogs/DoctorDataDialog";
import ReadMoreDialog from "@/components/Dialogs/ReadMoreDialog";

const question = {
  id: 1,
  question: "What is Cancer?",
  answer:
    "Consectetur aliquip ipsum amet id occaecat Lorem sit qui. Nostrud sint proident cupidatat voluptate fugiat commodo duis dolore est id. Do sunt cupidatat aute aliqua.",
};

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const router = useRouter();
  return (
    <div className="p-2">
      <div className="flex justify-between items-center">
        <div className="justify-start font-bold text-[#374151] ">Dashboard</div>

        <div className="hidden md:flex border rounded-full px-5 mx-8 w-full">
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
      <div className="md:hidden flex border rounded-full pl-5 mt-2  w-full">
        <div className="inset-y-0 left-1 flex items-center pointer-events-none">
          <SearchIcon
            className="h-5 w-5 text-black font-light"
            aria-hidden="true"
          />
        </div>
        <input
          id="search-field"
          className="w-full pr-2 h-full rounded-full pl-5 py-2 bg-gray border-black text-gray-900 placeholder-[#999999] focus:outline-none focus:placeholder-gray-300 focus:ring-0 focus:border-transparent"
          placeholder="Search patient, code, messages...."
          type="search"
          name="search"
        />
      </div>
      {/* //---------------------------------------------------------------------------------- */}
      <div className="grid lg:grid-cols-10 gap-5 py-10">
        <div className="lg:col-span-7">
          <div className="flex justify-between space-x-3 items-center">
            <div className="shadow w-1/2 py-4 px-4 rounded-lg shadow-[0px_4px_4px_#936CAB] ">
              Doctors Joined platform per week
              {/* <DoctorsChart/> */}
              <div className="bg-gray-200 w-full h-40"></div>
            </div>{" "}
            <div className="shadow  w-1/2  py-4 px-4 rounded-lg shadow-[0px_4px_4px_#936CAB]">
              No. of patient
              <div className="bg-gray-200 w-full h-40"></div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="shadow py-1 px-3 rounded-lg shadow-[4px_4px_4px_2px_#936CAB]">
            <div className="font-bold text-lg">Q&A</div>
            <div className="h-7 py-2 text-[#E61323] text-lg font-['Poppins']">
              Question- {question.question}
            </div>
            <div className="font-normal text-sm font-['Poppins'] py-8">
              {question.answer.slice(0, 110)}{" "}
              <button className="text-[#936CAB]" onClick={() => setOpen2(true)}>
                ....Read It
              </button>
              <div
                className="flex justify-end w-full py-2"
                onClick={() => setOpen1(true)}
              >
                <button
                  onClick={() => router.push("/questions")}
                  className="text-[#936CAB] font-bold"
                >
                  Read more
                </button>
              </div>
            </div>{" "}
           
          </div>
        </div>
      </div>

      {/* //-----------------------------   PATIENT DATA SECTION ------------------------------------------- */}
      <div>
        <div className="flex justify-between mb-1">
          <div className="text-gray-600 font-semibold text-xl">
            Patient Data
          </div>
          <button
            className="text-[#936CAB] font-medium text-sm px-10"
            onClick={() => setOpen(true)}
          >
            View All
          </button>
        </div>
        <div className="grid lg:grid-cols-3 gap-3">
          <div className="py-4 px-4  border-[#E40411] rounded shadow-[4px_4px_4px_2px_#936CAB]">
            <div className="flex items-center space-x-3">
              <img src={"/images/image2.png"} className="w-12 rounded-md" />
              <div className="flex-1">
                <div className="text-lg text-gray-800 font-semibold">
                  Jhon Doe
                </div>
                <div className="text-lg text-gray-500 ">Female</div>
              </div>
              <div className="px-3 py-1 rounded-md border border-[#936CAB]">
                Still in progress
              </div>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <div className="">
                <div className="text-sm text-[#936CAB]">complaints</div>
                <div className="text-sm text-gray-700">
                  lorem ipsum some demo
                </div>
              </div>
              <DocumentDownloadIcon className="w-6 h-6 text-[#936CAB]" />
            </div>
          </div>
          <div className="py-4 px-4  border-[#E40411] rounded shadow-[4px_4px_4px_2px_#936CAB]">
            <div className="flex items-center space-x-3">
              <img src={"/images/image2.png"} className="w-12 rounded-md" />
              <div className="flex-1">
                <div className="text-lg text-gray-800 font-semibold">
                  Jhon Doe
                </div>
                <div className="text-lg text-gray-500 ">Female</div>
              </div>
              <div className="px-3 py-1 rounded-md border border-[#936CAB]">
                Still in progress
              </div>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <div className="">
                <div className="text-sm text-[#936CAB]">complaints</div>
                <div className="text-sm text-gray-700">
                  lorem ipsum some demo
                </div>
              </div>
              <DocumentDownloadIcon className="w-6 h-6 text-[#936CAB]" />
            </div>
          </div>
          <div className="py-4 px-4  border-[#E40411] rounded shadow-[4px_4px_4px_2px_#936CAB]">
            <div className="flex items-center space-x-3">
              <img src={"/images/image2.png"} className="w-12 rounded-md" />
              <div className="flex-1">
                <div className="text-lg text-gray-800 font-semibold">
                  Jhon Doe
                </div>
                <div className="text-lg text-gray-500 ">Female</div>
              </div>
              <div className="px-3 py-1 rounded-md border border-[#936CAB]">
                Still in progress
              </div>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <div className="">
                <div className="text-sm text-[#936CAB]">complaints</div>
                <div className="text-sm text-gray-700">
                  lorem ipsum some demo
                </div>
              </div>
              <DocumentDownloadIcon className="w-6 h-6 text-[#936CAB]" />
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------DOCTORS DATA------------------------------ */}
      <div className="mt-5">
        <div className="flex justify-between mb-1">
          <div className="text-gray-600 font-semibold text-xl">
            Doctors Data
          </div>
          <button
            className="text-[#936CAB] font-medium text-sm px-10"
            onClick={() => setOpen1(true)}
          >
            View All
          </button>
        </div>
        <div className="grid lg:grid-cols-3 gap-3">
          <div className="py-4 px-4  border-[#E40411] rounded shadow-[4px_4px_4px_2px_#936CAB]">
            <div className="flex items-center space-x-3">
              <img src={"/images/image2.png"} className="w-12 rounded-md" />
              <div className="flex-1">
                <div className="text-lg text-gray-800 font-semibold">
                  Jhon Doe
                </div>
                <div className="text-lg text-gray-500 ">Female</div>
              </div>
              <div className="px-3 py-1 rounded-md border border-[#936CAB]">
                Still in progress
              </div>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <div className="">
                <div className="text-sm text-[#936CAB]">Speciality</div>
                <div className="text-sm text-gray-700">
                  lorem ipsum some demo
                </div>
              </div>
              <DocumentDownloadIcon className="w-6 h-6 text-[#936CAB]" />
            </div>
          </div>
          <div className="py-4 px-4  border-[#E40411] rounded shadow-[4px_4px_4px_2px_#936CAB]">
            <div className="flex items-center space-x-3">
              <img src={"/images/image2.png"} className="w-12 rounded-md" />
              <div className="flex-1">
                <div className="text-lg text-gray-800 font-semibold">
                  Jhon Doe
                </div>
                <div className="text-lg text-gray-500 ">Female</div>
              </div>
              <div className="px-3 py-1 rounded-md border border-[#936CAB]">
                Still in progress
              </div>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <div className="">
                <div className="text-sm text-[#936CAB]">Speciality</div>
                <div className="text-sm text-gray-700">
                  lorem ipsum some demo
                </div>
              </div>
              <DocumentDownloadIcon className="w-6 h-6 text-[#936CAB]" />
            </div>
          </div>
          <div className="py-4 px-4  border-[#E40411] rounded shadow-[4px_4px_4px_2px_#936CAB]">
            <div className="flex items-center space-x-3">
              <img src={"/images/image2.png"} className="w-12 rounded-md" />
              <div className="flex-1">
                <div className="text-lg text-gray-800 font-semibold">
                  Jhon Doe
                </div>
                <div className="text-lg text-gray-500 ">Female</div>
              </div>
              <div className="px-3 py-1 rounded-md border border-[#936CAB]">
                Still in progress
              </div>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <div className="">
                <div className="text-sm text-[#936CAB]">Speciality</div>
                <div className="text-sm text-gray-700">
                  lorem ipsum some demo
                </div>
              </div>
              <DocumentDownloadIcon className="w-6 h-6 text-[#936CAB]" />
            </div>
          </div>
        </div>
      </div>
      <PatientDataDialog open={open} setOpen={setOpen} />
      <DoctorDataDialog open={open1} setOpen={setOpen1} />
      <ReadMoreDialog open={open2} setOpen={setOpen2} />
    </div>
  );
};

export default Dashboard;
