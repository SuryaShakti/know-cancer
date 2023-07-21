import { SearchIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import AddQADialog from "@/components/Dialogs/AddQ&ADialog";
import ReadMoreDialog from "@/components/Dialogs/ReadMoreDialog";
import {
  approveQa,
  deleteQa,
  getAllQna,
  getAllQuestions,
  rejectQa,
} from "@/apis/qna";
import { toast } from "react-toastify";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { Tab } from "@headlessui/react";
import ConfirmationDialog from "@/components/Dialogs/ConfirmationDialog";

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

  const [on, setOn] = useState(false);
  const [currentRow, setCurrentRow] = useState("");
  const [questions, setQuestions] = useState([]);

  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState(null);

  const getQuestions = async () => {
    console.log("runned");
    try {
      const response = await getAllQuestions();
      console.log(response);
      setQuestions(response);
    } catch (error) {
      toast.error(error ? error : "Something went wrong");
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const approveHandler = async (id) => {
    console.log("approve handler called");
    try {
      const resoponse = await approveQa(id);
      console.log(resoponse);
      const _questions = [...questions];

      setQuestions([
        ..._questions.filter((item, index) => item._id !== resoponse._id),
        resoponse,
      ]);
    } catch (error) {
      toast.error(error ? error : "Something went wrong");
    }
  };
  const rejectHandler = async (id) => {
    console.log("approve handler called");
    try {
      const resoponse = await rejectQa(id);
      console.log(resoponse);
      const _questions = [...questions];

      setQuestions([
        ..._questions.filter((item, index) => item._id !== resoponse._id),
        resoponse,
      ]);
    } catch (error) {
      toast.error(error ? error : "Something went wrong");
    }
  };

  const deleteQuestion = async (id) => {
    try {
      const response = await deleteQa(id);
      const _questions = [...questions];

      setQuestions([
        ..._questions.filter((item, index) => item._id !== response._id),
      ]);
    } catch (error) {
      toast.error(error ? error : "Something went wrong");
    }
  };

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
          data={questions}
          setData={setQuestions}
          edit={edit}
          editData={editData}
        />
      </div>

      <Tab.Group>
        <Tab.List>
          <Tab className=" my-4 px-12 py-1 border rounded-md ">
            {({ selected }) => (
              <div
                className={
                  selected
                    ? "border-b-2 border-[#936CAB]"
                    : "bg-white text-black"
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
                  selected
                    ? "border-b-2 border-[#936CAB]"
                    : "bg-white text-black"
                }
              >
                New Questions
              </div>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div class="rounded-lg w-full mt-4 mx-4 ">
              <table class="text-left  w-full">
                <thead class="text-base text-black  border">
                  <tr>
                    <th scope="col" class="flex-1 px-4 ">
                      Question & Answer
                    </th>
                    <th scope="col" class="py-3 ">
                      Intent
                    </th>
                    <th scope="col" class="py-3 ">
                      Status
                    </th>
                    <th scope="col" class=" py-3 ">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="w-full">
                  {questions
                    ?.filter(
                      (item, index) => item.status === 2 || item.status === 3
                    )
                    ?.map((item, index) => (
                      <tr class="bg-white w-full border-b shadow-[0_4px_14px_rgba(0, 0, 0, 0.05)]">
                        <td class="px-4 py-4 font-medium text-base">
                          {item.question}
                        </td>
                        <td class=" py-4 text-sm">{item.intent}</td>
                        <td class=" py-8  rounded-md font-semibold text-sm">
                          {item.status === 2
                            ? "Uploaded"
                            : item.status === 3
                            ? "Rejected"
                            : "N/A"}
                        </td>
                        <td class="flex  items-center py-7 ">
                          <PencilAltIcon
                            onClick={() => {
                              setEdit(true);
                              setEditData(item);
                              setOpen(true);
                            }}
                            className=" text-[#2E65F3] h-6 mr-5"
                          />
                          <TrashIcon
                            onClick={() => {
                              setOn(true);
                              setCurrentRow(item._id);
                            }}
                            className="cursor-pointer text-[#F32D2D] h-6"
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div class="rounded-lg w-full mt-4 mx-4 ">
              <table class="text-left w-full">
                <thead class="text-base text-black Table border">
                  <tr>
                    <th scope="col" class="px-4 ">
                      Question & Answer
                    </th>
                    <th scope="col" class=" py-3 ">
                      Intent
                    </th>
                    <th scope="col" class=" py-3 ">
                      Status
                    </th>
                    <th scope="col" class=" py-3">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {questions
                    ?.filter((item, index) => item.status === 1)
                    ?.map((item, index) => (
                      <tr class="bg-white w-full border-b shadow-[0_4px_14px_rgba(0, 0, 0, 0.05)]">
                        <td class="px-4 py-4 font-medium text-base">
                          {item.question}
                        </td>
                        <td class=" py-4 text-sm">{item.intent}</td>
                        <td class=" py-8  rounded-md font-semibold text-sm">
                          <div className="flex space-x-3 items-center ">
                            <button
                              onClick={() => approveHandler(item._id)}
                              className="text-xs p-2 rounded-md bg-[#9973B1] text-white"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => rejectHandler(item._id)}
                              className="cursor-pointer text-xs text-[#9973B1] p-2 rounded-md border border-[#9973B1]"
                            >
                              Reject
                            </button>
                          </div>
                        </td>
                        <td class="flex  items-center py-7 ">
                          <PencilAltIcon
                            onClick={() => {
                              setEdit(true);
                              setEditData(item);
                              setOpen(true);
                            }}
                            className=" text-[#2E65F3] h-6 mr-5"
                          />
                          <TrashIcon
                            onClick={() => {
                              setOn(true);
                              setCurrentRow(item._id);
                            }}
                            className="cursor-pointer text-[#F32D2D] h-6"
                          />
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
      <ConfirmationDialog
        on={on}
        setOn={setOn}
        callback={() => deleteQuestion(currentRow)}
      />
    </div>
  );
};
export default Questions;
