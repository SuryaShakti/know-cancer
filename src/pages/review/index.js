import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import AddQADialog from "@/components/Dialogs/AddQ&ADialog";

const reviews = [
  {
    id: 1,
    line1: "Ultimately the reliable product",
    line2:
      "“Super lovely product. I love this product because the software is brilliantly helpful. Can’t get enough! ...”",
  },
  {
    id: 2,
    line1: "Ultimately the reliable product",
    line2:
      "“Super lovely product. I love this product because the software is brilliantly helpful. Can’t get enough! ...”",
  },
  {
    id: 3,
    line1: "Ultimately the reliable product",
    line2:
      "“Super lovely product. I love this product because the software is brilliantly helpful. Can’t get enough! ...”",
  },
  {
    id: 4,
    line1: "Ultimately the reliable product",
    line2:
      "“Super lovely product. I love this product because the software is brilliantly helpful. Can’t get enough! ...”",
  },
  {
    id: 5,
    line1: "Ultimately the reliable product",
    line2:
      "“Super lovely product. I love this product because the software is brilliantly helpful. Can’t get enough! ...”",
  },
  {
    id: 6,
    line1: "Ultimately the reliable product",
    line2:
      "“Super lovely product. I love this product because the software is brilliantly helpful. Can’t get enough! ...”",
  },
];

const Review = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {" "}
      <div className="flex justify-between items-center">
        <div className="justify-start font-semibold text-2xl text-[#374151] ">
          Review
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
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        {reviews.map((item, index) => (
          <div className="shadow py-4 px-3 mx-5 rounded shadow-[4px_4px_4px_2px_#936CAB]">
            <div className="grid grid-cols-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#219653"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#219653"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#219653"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#219653"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#219653"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#219653"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#219653"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#219653"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#219653"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#219653"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </div>
            <div className="flex space-x-2">
              <div className="text-black font-bold text-lg p-1 ">
                {item.line1}
              </div>
            </div>

            <div className=" text-black text-sm ">{item.line2}</div>
            <div className=" text-black text-sm ">
              [Name] reviews [Product Name]
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
