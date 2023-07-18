import { SearchIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import AddQADialog from "@/components/Dialogs/AddQ&ADialog";
import ReadMoreDialog from "@/components/Dialogs/ReadMoreDialog";
import { getAllQna } from "@/apis/qna";
import { toast } from "react-toastify";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { Tab } from "@headlessui/react";

const questions = [
  {
    id: 1,
    qa: "What is Cancer?",
    intent1: "#Whatis ",
    intent2: " #Complex",
    intent3: "#uncontrolled",
    status: "Uploaded",
    edit1: PencilAltIcon,
    edit2: TrashIcon,
  },
  {
    id: 2,
    qa: "What is Cancer?",
    intent1: "#Whatis ",
    intent2: " #Complex",
    intent3: "#uncontrolled",
    status: "Uploaded",
    edit1: PencilAltIcon,
    edit2: TrashIcon,
  },
  {
    id: 3,
    qa: "What is Cancer?",
    intent1: "#Whatis ",
    intent2: " #Complex",
    intent3: "#uncontrolled",
    status: "Uploaded",
    edit1: PencilAltIcon,
    edit2: TrashIcon,
  },
  {
    id: 4,
    qa: "What is Cancer?",
    intent1: "#Whatis ",
    intent2: " #Complex",
    intent3: "#uncontrolled",
    status: "Uploaded",
    edit1: PencilAltIcon,
    edit2: TrashIcon,
  },
  {
    id: 5,
    qa: "What is Cancer?",
    intent1: "#Whatis ",
    intent2: " #Complex",
    intent3: "#uncontrolled",
    status: "Uploaded",
    edit1: PencilAltIcon,
    edit2: TrashIcon,
  },
  {
    id: 6,
    qa: "What is Cancer?",
    intent1: "#Whatis ",
    intent2: " #Complex",
    intent3: "#uncontrolled",
    status: "Uploaded",
    edit1: PencilAltIcon,
    edit2: TrashIcon,
  },
  {
    id: 7,
    qa: "What is Cancer?",
    intent1: "#Whatis ",
    intent2: " #Complex",
    intent3: "#uncontrolled",
    status: "Uploaded",
    edit1: PencilAltIcon,
    edit2: TrashIcon,
  },
];

const Questions = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  // const [current,setCurrent] = useState();
  // const [questions, setQuestions] = useState([]);

  // const getQuestions = async () => {
  //   console.log("runned");
  //   try {
  //     const response = await getAllQna();
  //     console.log(response);
  //     setQuestions(response);
  //   } catch (error) {
  //     toast.error(error ? error : "Something went wrong");
  //   }
  // };

  // useEffect(() => {
  //   getQuestions();
  // }, []);

  return (
    <div>
      <div className="flex flex-1 justify-between items-center">
        <div className="w-auto justify-start font-semibold text-xl text-[#374151] ">
          Information
        </div>
        <div className=" sm:flex items-center md:ml-32">
          <div
            className=" font-normal text-sm w-full bg-[#936CAB] mr-2 rounded-md"
            onClick={() => setOpen(true)}
          >
            <button className="whitespace-nowrap px-3 py-1 text-sm text-white font-semibold">
              + Add New Question
            </button>
          </div>{" "}
        </div>

        <AddQADialog
          open={open}
          setOpen={setOpen}
          // questions={questions}
          // setQuestions={setQuestions}
        />
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
                Approved Questions
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
                New Questions
              </div>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            {" "}
            <div class="rounded-lg w-full mt-4 mx-4 ">
              <table class="text-left">
                <thead class="text-base text-black Table border">
                  <tr>
                    <th scope="col" class="px-4 ">
                      Question & Answer
                    </th>
                    <th scope="col" class="pl-64 py-3 ">
                      Intent
                    </th>
                    <th scope="col" class="pl-52 py-3 ">
                      Status
                    </th>
                    <th scope="col" class="pl-48 py-3 pr-16">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {questions.map((item, index) => (
                    <tr class="bg-white border-b shadow-[0_4px_14px_rgba(0, 0, 0, 0.05)]">
                      <td class="px-4 py-4 font-medium text-base">{item.qa}</td>
                      <td class="pl-64 py-4 text-sm">
                        {item.intent1}
                        <br />
                        {item.intent2}
                        <br />
                        {item.intent3}
                      </td>
                      <td class="pl-52 py-8 absolute rounded-md font-semibold text-sm">
                        {item.status}
                      </td>
                      <td class="flex absolute justify-between items-center pl-80 py-7 ">
                        <item.edit1 className="justify-start w-auto text-[#2E65F3] h-6 px-16" />
                        <item.edit2 className="justify-start w-auto text-[#F32D2D] h-6" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            {" "}
            <div class="rounded-lg w-full mt-4 mx-4 ">
              <table class="text-left">
                <thead class="text-base text-black Table border">
                  <tr>
                    <th scope="col" class="px-4 ">
                      Question & Answer
                    </th>
                    <th scope="col" class="pl-64 py-3 ">
                      Intent
                    </th>
                    <th scope="col" class="pl-52 py-3 ">
                      Status
                    </th>
                    <th scope="col" class="pl-48 py-3 pr-16">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {questions.map((item, index) => (
                    <tr class="bg-white border-b shadow-[0_4px_14px_rgba(0, 0, 0, 0.05)]">
                      <td class="px-4 py-4 font-medium text-base">{item.qa}</td>
                      <td class="pl-64 py-4 text-sm">
                        {item.intent1}
                        <br />
                        {item.intent2}
                        <br />
                        {item.intent3}
                      </td>
                      <td class="flex justify-between pl-36 py-8 absolute rounded-md font-semibold text-sm">
                        <div className=" sm:flex items-center ">
                          <div
                            className=" font-normal text-sm w-full bg-[#936CAB] mr-2 rounded-md "
                            onClick={() => setOpen(true)}
                          >
                            <button className="whitespace-nowrap px-3 py-1 text-sm text-white font-semibold">
                              Approve
                            </button>{" "}
                          </div>
                        </div>
                        <div className=" sm:flex items-center ">
                          <div
                            className=" font-normal text-sm w-full border border-[#936CAB] mr-2 rounded-md"
                            onClick={() => setOpen(true)}
                          >
                            <button className="whitespace-nowrap px-4 py-1 text-sm text-[#936CAB] font-semibold">
                              Reject
                            </button>{" "}
                          </div>
                        </div>
                      </td>
                      <td class="flex absolute justify-between items-center pl-80 py-7 ">
                        <item.edit1 className="justify-start w-auto text-[#2E65F3] h-6 px-16" />
                        <item.edit2 className="justify-start w-auto text-[#F32D2D] h-6" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      {/* <ReadMoreDialog open={open1} setOpen={setOpen1} current={current} /> */}
    </div>
  );
};
export default Questions;
