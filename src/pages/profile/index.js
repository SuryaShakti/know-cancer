import React,{useState} from "react";
import { FileUploader } from "react-drag-drop-files";
import { SearchIcon } from "@heroicons/react/outline";
import AddQADialog from "@/components/Dialogs/AddQ&ADialog";

const fileTypes = ["JPEG", "PNG", "GIF"];


const Profile = () => {

  const [open, setOpen] = useState(false);

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <div>
      {" "}
      <div className="flex justify-between items-center">
        <div className="justify-start font-semibold text-2xl text-[#374151] ">
          Profile
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
            className="flex font-normal text-sm w-full bg-[#936CAB]"
            onClick={() => setOpen(true)}
          >
            <button>+ Add New Q&A</button>
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
      <div className="bg p-5">
        <div className=" grid md:grid-cols-4 ">
          <div>
            <div className="text-[#936CAB] ">Name</div>
            <div className="my-2">
              <div className="relative mt-2 rounded-md shadow-sm ">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-4 ">
          <div>
            <div className="text-[#936CAB] ">Phone Number</div>
            <div className="my-2">
              <div className="relative mt-2 rounded-md shadow-sm ">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 ">
          <div>
            <div className="text-[#936CAB] ">E-mail</div>
            <div className="my-2">
              <div className="relative mt-2 rounded-md shadow-sm ">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 ">
          <div>
            <div className="text-[#936CAB] ">Address</div>
            <div className="my-2">
              <div className="relative mt-2 rounded-md shadow-sm ">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-4 ">
          <div>
            <div className="text-[#936CAB] ">City</div>
            <div className="my-2">
              <div className="relative mt-2 rounded-md shadow-sm p-2">
                <select
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="text-[#936CAB] ">Country</div>
            <div className="my-2">
              <div className="relative mt-2 rounded-md shadow-sm p-2 ">
                <div className="absolute p-2 inset-y-0 left-1 flex items-center pointer-events-none">
                  <SearchIcon
                    className="h-5 w-5 text-[#936CAB] font-light"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="text-[#936CAB] ">Postal Code</div>
            <div className="my-2">
              <div className="relative mt-2 rounded-md shadow-sm p-2">
                <div className="absolute p-2 inset-y-0 left-1 flex items-center pointer-events-none">
                  <SearchIcon
                    className="h-5 w-5 text-[#936CAB] font-light"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-1 ">
          <div>
            <div className="text-[#936CAB] ">About Me</div>
            <div className="my-2">
              <div className="relative mt-2 rounded-md shadow-sm p-2">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Profile;
