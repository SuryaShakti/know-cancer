import React, { useState } from "react";
// import { SearchIcon } from "@heroicons/react/outline";
// import AddQADialog from "@/components/Dialogs/AddQ&ADialog";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const reviews = [
  {
    id: 1,
    name: "Ashwin",
    date: "04 November 2022",
    review:
      "Even after consuming 6 bottles till date l am not feeling the relief the Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Ashwin",
    date: "04 November 2022",
    review:
      "Even after consuming 6 bottles till date l am not feeling the relief the Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "Ashwin",
    date: "04 November 2022",
    review:
      "Even after consuming 6 bottles till date l am not feeling the relief the Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    name: "Ashwin",
    date: "04 November 2022",
    review:
      "Even after consuming 6 bottles till date l am not feeling the relief the Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    name: "Ashwin",
    date: "04 November 2022",
    review:
      "Even after consuming 6 bottles till date l am not feeling the relief the Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    name: "Ashwin",
    date: "04 November 2022",
    review:
      "Even after consuming 6 bottles till date l am not feeling the relief the Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Review = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {" "}
      <div className="flex justify-between items-center">
        <div className="w-auto justify-start font-bold text-xl text-[#374151] ">
          Review
        </div>
        {/* <div className="hidden lg:flex border rounded-full px-5 mx-8 w-full">
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
        </div> */}
        {/* <div
          className="flex font-normal text-sm w-fit bg-[#936CAB] ml-16"
          onClick={() => setOpen(true)}
        >
          <button className="whitespace-nowrap px-3 py-1 text-sm text-white font-semibold">
            + Add New Q&A
          </button>
        </div>{" "} */}
        {/* <div className="flex justify-end w-full">
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
        </div> */}
      </div>
      {/* <div className="lg:hidden flex border rounded-full pl-5 mt-2  w-full">
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
      </div> */}
      {/* <AddQADialog open={open} setOpen={setOpen} /> */}
      {/* ----------------------------------------------------------------------------------------------------- */}
      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <div className=" py-2 px-2 rounded-lg border">
          <div className="font-semibold">Customer Reviews:</div>
          <div className="grid md:grid-cols-2 ">
            <div>
              <div className="font-bold text-2xl px-6 mt-2">4.2/5</div>
              <div className="grid grid-cols-12 py-1 px-3">
                <StarIcon className="text-[#936CAB] h-5 " />
                <StarIcon className="text-[#936CAB] h-5 " />{" "}
                <StarIcon className="text-[#936CAB] h-5 " />{" "}
                <StarIcon className="text-[#936CAB] h-5 " />{" "}
                <StarIcon className="text-[#999999] h-5 " />
              </div>
              <p className="font-normal text-sm px-3 text-[#999999]">
                ( 678 Ratings )
              </p>
              <p className="font-normal text-sm px-3 text-[#999999]">
                ( 24 Reviews )
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {reviews.map((item, index) => (
          <div className=" py-2 px-2 rounded-lg border">
            {" "}
            <div className="flex justify-between items-center">
              <div className="justify-start text-sm px-2">
                <div className="font-semibold">{item.name}</div>
                <div className="text-[#F33060]">{item.date}</div>
              </div>
              <div className="w-auto justify-start text-sm text-[#7E7E7E] px-2">
                <ThumbUpIcon className="text-grey-800 h-5 " />
              </div>
            </div>
            <div className="grid grid-cols-12 px-2">
              <StarIcon className="text-[#FFA93F] h-5 " />
              <StarIcon className="text-[#FFA93F] h-5 " />{" "}
              <StarIcon className="text-[#FFA93F] h-5 " />{" "}
              <StarIcon className="text-[#FFA93F] h-5 " />{" "}
              <StarIcon className="text-[#999999] h-5 " />
            </div>
            <p className="font-normal text-sm px-2 py-2 text-[#999999]">
              {item.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
