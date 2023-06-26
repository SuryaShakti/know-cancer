import { useState } from "react";
import React from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { BeatLoader } from "react-spinners";
import { addNewQa } from "@/apis/qna";
import { toast } from "react-toastify";

const QAForm = ({ data, setData, setOpen }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [intent, setIntent] = useState("");
  const [loading, setLoading] = useState(false);

  const createQa = async () => {
    try {
      setLoading(true);
      const response = await addNewQa(question, answer, intent);
      const _data = [...data];
      setData([..._data, response]);
      setLoading(false);
      setOpen(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error ? error : "Something went wrong", "bottom-right");
    }
  };

  return (
    <div className="w-full max-w-lg p-5">
      {" "}
      <div className="font-bold text-gray-800 text-left text-xl py-5">
        ADD Q&A
      </div>
      <div className="py-8">
        <div className="text-black text-left font-bold">Question:</div>
        <div className="my-2">
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="Question"
              id="Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="block w-full rounded-md py-1.5 px-2 bg-[#3232470F] text-[#000000] placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="text-black text-left font-bold">Answer:</div>
        <div className="my-2">
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="answer"
              id="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="block w-full rounded-md py-1.5 px-2 bg-[#3232470F] text-[#000000] placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="text-black font-bold text-left">Intent</div>
        <div className="my-2">
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="intent"
              id="intent"
              value={intent}
              onChange={(e) => setIntent(e.target.value)}
              className="block w-full rounded-md py-1.5 px-2 bg-[#3232470F] text-[#000000] placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => createQa()}
        className="rounded-md mt-5 text-white w-full py-2 bg-[#936CAB] hover:bg-[#936CAB]-800"
      >
        {loading ? <BeatLoader className="text-white" /> : "Save"}
      </button>
    </div>
  );
};

export default QAForm;
