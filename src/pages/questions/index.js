import { SearchIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import AddQADialog from "@/components/Dialogs/AddQ&ADialog";
import ReadMoreDialog from "@/components/Dialogs/ReadMoreDialog";

const questions = [
  {
    id: 1,
    question: "What is Cancer?",
    answer:
      "Consectetur aliquip ipsum amet id occaecat Lorem sit qui. Nostrud sint proident cupidatat voluptate fugiat commodo duis dolore est id. Do sunt cupidatat aute aliqua.",
  },
  {
    id: 2,
    question: "What is Cancer?",
    answer:
      "Consectetur aliquip ipsum amet id occaecat Lorem sit qui. Nostrud sint proident cupidatat voluptate fugiat commodo duis dolore est id. Do sunt cupidatat aute aliqua.",
  },
  {
    id: 3,
    question: "What is Cancer?",
    answer:
      "Consectetur aliquip ipsum amet id occaecat Lorem sit qui. Nostrud sint proident cupidatat voluptate fugiat commodo duis dolore est id. Do sunt cupidatat aute aliqua.",
  },
  {
    id: 4,
    question: "What is Cancer?",
    answer:
      "Consectetur aliquip ipsum amet id occaecat Lorem sit qui. Nostrud sint proident cupidatat voluptate fugiat commodo duis dolore est id. Do sunt cupidatat aute aliqua.",
  },
  {
    id: 5,
    question: "What is Cancer?",
    answer:
      "Consectetur aliquip ipsum amet id occaecat Lorem sit qui. Nostrud sint proident cupidatat voluptate fugiat commodo duis dolore est id. Do sunt cupidatat aute aliqua.",
  },
  {
    id: 6,
    question: "What is Cancer?",
    answer:
      "Consectetur aliquip ipsum amet id occaecat Lorem sit qui. Nostrud sint proident cupidatat voluptate fugiat commodo duis dolore est id. Do sunt cupidatat aute aliqua.",
  },
  {
    id: 7,
    question: "What is Cancer?",
    answer:
      "Consectetur aliquip ipsum amet id occaecat Lorem sit qui. Nostrud sint proident cupidatat voluptate fugiat commodo duis dolore est id. Do sunt cupidatat aute aliqua.",
  },
];

const Questions = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  return (
    <div>
      <div>
        <div className="justify-start font-bold text-[#374151] ">Dashboard</div>
        <div className="hidden md:flex items-center md:ml-32">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <div className="relative pl-2  border rounded-full border-gray-400 text-gray-400 focus-within:text-gray-600">
            <div className="absolute inset-y-0 left-1 flex items-center pointer-events-none">
              <SearchIcon
                className="h-5 w-5 text-orange-400 font-light"
                aria-hidden="true"
              />
            </div>
            <input
              id="search-field"
              className="block w-80 pr-2 h-full rounded-full pl-8  py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
              placeholder="Search patient, code, messages...."
              type="search"
              name="search"
            />
          </div>
          <div
            className="flex justify-end w-full"
            onClick={() => setOpen(true)}
          >
            <button>Add Q&A</button>
          </div>
        </div>
        <AddQADialog open={open} setOpen={setOpen} />
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {questions.map((item, index) => (
          <div className="shadow py-4 px-7 rounded-lg shadow-[4px_4px_4px_2px_rgba(230,19,35,0.5)]">
            <div className="text-black font-bold text-lg p-1 font-['Poppins'] flex space-x-2">
              <img src={"/images/vector.png"} className="w-8 rounded-md" />{" "}
              <div className="px-2"> Heal Cancer </div>
            </div>
            <div className="w-72 border rounded-md p-2 border-[#FABDD4] ml-2 justify">
              <div className="h-14 text-[#E61323] text-lg font-['Poppins']">
                Question- {item.question}
              </div>
              <div className="font-normal text-sm font-['Poppins']">
                {item.answer.slice(0, 120)}
              </div>
              <div
                className="flex justify-end w-full"
                onClick={() => setOpen1(true)}
              >
                <button className="text-[#E61323]">....Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ReadMoreDialog open={open1} setOpen={setOpen1} />
    </div>
  );
};

export default Questions;
