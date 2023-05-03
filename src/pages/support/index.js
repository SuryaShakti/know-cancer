import React from "react";

const problems = [
  {
    id: 1,
    name: "Ethel Howard",
    problem: "This is the Problem",
    ticketno: 293810,
  },
  {
    id: 1,
    name: "Ethel Howard",
    problem: "This is the Problem",
    ticketno: 293810,
  },
  {
    id: 1,
    name: "Ethel Howard",
    problem: "This is the Problem",
    ticketno: 293810,
  },
  {
    id: 1,
    name: "Ethel Howard",
    problem: "This is the Problem",
    ticketno: 293810,
  },
  {
    id: 1,
    name: "Ethel Howard",
    problem: "This is the Problem",
    ticketno: 293810,
  },
  {
    id: 1,
    name: "Ethel Howard",
    problem: "This is the Problem",
    ticketno: 293810,
  },
  {
    id: 1,
    name: "Ethel Howard",
    problem: "This is the Problem",
    ticketno: 293810,
  },
  {
    id: 1,
    name: "Ethel Howard",
    problem: "This is the Problem",
    ticketno: 293810,
  },
  {
    id: 1,
    name: "Ethel Howard",
    problem: "This is the Problem",
    ticketno: 293810,
  },
  {
    id: 1,
    name: "Ethel Howard",
    problem: "This is the Problem",
    ticketno: 293810,
  },
  {
    id: 1,
    name: "Ethel Howard",
    problem: "This is the Problem",
    ticketno: 293810,
  },
];

const Support = () => {
  return (
    <div>
      {" "}
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        {problems.map((item, index) => (
          <div className="shadow py-4 px-7 rounded-lg shadow-[4px_4px_4px_2px_rgba(230,19,35,0.5)]">
            <div className="flex space-x-2">
              <img src={"/images/image2.png"} className="w-14 rounded-md" />
              <div className="text-black font-bold text-lg p-1 ">
                {item.name}
              </div>
            </div>
            <div className="grid md:grid-cols-2">
              <div className=" text-[#938F99] text-sm ">Problem</div>
              <div className=" text-[#938F99] text-sm ">Ticket Number</div>
              <div className=" text-black text-sm ">{item.problem}</div>
              <div className=" text-black text-sm ">{item.ticketno}</div>
            </div>
            <div
              className="flex justify-end w-full py-6"
              onClick={() => setOpen1(true)}
            >
              <button className="bg-[#E61323] rounded-md border text-white px-7 py-1">
                Resolve
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
