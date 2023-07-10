import React, { useState } from "react";
// import { SearchIcon } from "@heroicons/react/outline";
// import AddQADialog from "@/components/Dialogs/AddQ&ADialog";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { Tab } from "@headlessui/react";

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
            {" "}
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
          </Tab.Panel>
          <Tab.Panel>
            {" "}
            <div className="grid lg:grid-cols-2 gap-6 mt-6">
              <div className=" py-2 px-2 rounded-lg border">
                <div className="font-semibold">Customer Reviews:</div>
                <div className="grid md:grid-cols-2 ">
                  <div>
                    <div className="font-bold text-2xl px-6 mt-2">4.5/5</div>
                    <div className="grid grid-cols-12 py-1 px-3">
                      <StarIcon className="text-[#936CAB] h-5 " />
                      <StarIcon className="text-[#936CAB] h-5 " />{" "}
                      <StarIcon className="text-[#936CAB] h-5 " />{" "}
                      <StarIcon className="text-[#936CAB] h-5 " />{" "}
                      <StarIcon className="text-[#999999] h-5 " />
                    </div>
                    <p className="font-normal text-sm px-3 text-[#999999]">
                      ( 872 Ratings )
                    </p>
                    <p className="font-normal text-sm px-3 text-[#999999]">
                      ( 45 Reviews )
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
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      {/* ----------------------------------------------------------------------------------------------------- */}
    </div>
  );
};

export default Review;
