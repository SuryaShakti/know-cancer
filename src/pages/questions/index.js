import { SearchIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import AddQADialog from "@/components/Dialogs/AddQ&ADialog";
import ReadMoreDialog from "@/components/Dialogs/ReadMoreDialog";
import { getAllQuestions } from "@/apis/qna";

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
  {
    id: 8,
    question: "What is Cancer?",
    answer:
      "Consectetur aliquip ipsum amet id occaecat Lorem sit qui. Nostrud sint proident cupidatat voluptate fugiat commodo duis dolore est id. Do sunt cupidatat aute aliqua.",
  },
  {
    id: 9,
    question: "What is Cancer?",
    answer:
      "Consectetur aliquip ipsum amet id occaecat Lorem sit qui. Nostrud sint proident cupidatat voluptate fugiat commodo duis dolore est id. Do sunt cupidatat aute aliqua.",
  },
  {
    id: 10,
    question: "What is Cancer?",
    answer:
      "Consectetur aliquip ipsum amet id occaecat Lorem sit qui. Nostrud sint proident cupidatat voluptate fugiat commodo duis dolore est id. Do sunt cupidatat aute aliqua.",
  },
  {
    id: 11,
    question: "What is Cancer?",
    answer:
      "Consectetur aliquip ipsum amet id occaecat Lorem sit qui. Nostrud sint proident cupidatat voluptate fugiat commodo duis dolore est id. Do sunt cupidatat aute aliqua.",
  },
  {
    id: 12,
    question: "What is Cancer?",
    answer:
      "Consectetur aliquip ipsum amet id occaecat Lorem sit qui. Nostrud sint proident cupidatat voluptate fugiat commodo duis dolore est id. Do sunt cupidatat aute aliqua.",
  },
];

const Questions = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  // CURRENT QUESTION STATE FOR READ MORE BUTTON (FOR PASSING TO DIALOG)
  const [current, setCurrent] = useState();

  // LOADING STATE FOR LOADER
  const [loading, setLoading] = useState("false");
  // DATA STATE WHERE ALL QUESTIONS WILL BE STORED AFTER API CALL
  const [data, setData] = useState([]);

  // FUNCTION FOR API CALL FROM apis/qna FILE
  const getData = async () => {
    const data = await getAllQuestions();
    console.log(data);
    // SETTING STATE SETDATA BELOW
    setData(data.data);
  };

  // CALLING ABOVE FUNCTION IN USEEFFECT
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className=" md:flex flex-1 justify-between items-center">
        <div className="w-auto justify-start font-semibold text-xl text-[#374151] ">
          Q & A
        </div>
        <div className=" sm:flex items-center md:ml-32">
          <div className="sm:display-block flex border rounded-full px-5 md:mx-8 my-3 md:my-0 w-full">
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
            className=" font-normal text-sm w-full bg-[#936CAB] mr-2 "
            onClick={() => setOpen(true)}
          >
            <button className="whitespace-nowrap px-3 py-1 text-sm text-white font-semibold">
              + Add New Q&A
            </button>
          </div>{" "}
        </div>

        <AddQADialog open={open} setOpen={setOpen} />
      </div>

      {/* -------------------------------------------------------------------------------------------------- */}

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
        {data.map((item, index) => (
          <div className="shadow py-4 px-3 rounded-lg shadow-[4px_4px_4px_2px_#936CAB]">
            <div className="h-7 text-[#E61323] text-lg font-['Poppins']">
              Question- {item.question}
            </div>
            <div className="font-normal text-sm font-['Poppins']">
              {item.answer.slice(0, 70)}{" "}
              <button
                className="text-[#E61323]"
                onClick={() => {
                  setOpen1(true);
                  setCurrent(item);
                }}
              >
                ....Read More
              </button>
            </div>
            <div className="flex justify-end">
              <button className="text-sm font-normal text-white bg-[#936CAB] flex m-2 p-2 px-7 rounded  w-fit">
                Approve
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* PASSING QUESTION OBJECT TO THE DIALOG FOR FULL VIEW (READ MORE) */}
      <ReadMoreDialog open={open1} setOpen={setOpen1} current={current} />
    </div>
  );
};

export default Questions;
