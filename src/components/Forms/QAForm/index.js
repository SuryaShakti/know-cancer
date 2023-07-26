import { useState } from "react";
import React from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { addNewQa, editQuestion } from "@/apis/qna";
import { toast } from "react-toastify";

const QAForm = ({ data, setData, setOpen, edit, editData }) => {
  const [question, setQuestion] = useState(edit ? editData?.question : "");
  const [intent, setIntent] = useState(edit ? editData?.intent : "");
  const [answer, setAnswer] = useState(edit ? editData?.answer : "");
  const [preference, setPreference] = useState(edit ? editData?.preference : 1);
  const [link, setLink] = useState(edit ? editData?.link : "");

  const saveHandler = async () => {
    try {
      const response = await addNewQa(
        question,
        answer,
        intent,
        preference,
        link
      );

      console.log(response);
      const _questions = [...data];
      setData([response, ..._questions]);
      setOpen(false);
    } catch (error) {
      toast.error(error ? error : "Something went wrong");
    }
  };

  const updateObjectById = (idToUpdate, updatedObject) => {
    console.log("update function called");
    setData((prevDataArray) => [
      ...prevDataArray.map((obj) =>
        obj.id === idToUpdate ? updatedObject : obj
      ),
    ]);

    setOpen(false);
  };

  const editHandler = async () => {
    try {
      const response = await editQuestion(
        question,
        answer,
        intent,
        preference,
        link,
        editData._id
      );

      const _questions = [...data];

      const idToUpdate = editData._id;
      const updatedObject = response;
      updateObjectById(idToUpdate, updatedObject);
    } catch (error) {
      toast.error(error ? error : "Something went wrong");
    }
  };

  const handleRadioChange = (event) => {
    setPreference(Number(event.target.value));
  };

  return (
    <div className="w-full max-w-lg px-7">
      <div className="font-bold text-gray-800 text-left text-xl py-3">
        ADD Information
      </div>
      <div className="py-4 space-y-2">
        <div className="text-black text-left font-bold">Question:</div>
        <div>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="question"
              id="question"
              placeholder="What is Cancer?"
              autoComplete="none"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="block w-full rounded-md py-1 px-2 bg-[#3232470F] text-[#000000] placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="text-black text-left font-bold">
          Choose Your Preference
        </div>
        <div className="text-left">
          <input
            type="radio"
            id="text"
            name="text"
            value={1}
            checked={preference === 1}
            onChange={handleRadioChange}
          />
          <label htmlFor="text" className="px-2 font-semibold">
            Text
          </label>
          <br />
          <input
            type="radio"
            id="video"
            name="text"
            value={2}
            checked={preference === 2}
            onChange={handleRadioChange}
          />
          <label htmlFor="video" className="px-2 font-semibold">
            Video
          </label>
          <br />
          <input
            type="radio"
            id="both"
            name="text"
            value={3}
            checked={preference === 3}
            onChange={handleRadioChange}
          />
          <label htmlFor="both" className="px-2 font-semibold">
            Both
          </label>
        </div>
        {preference === 1 && (
          <div>
            <div className="text-black text-left font-bold">Answer:</div>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="answer"
                id="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Cancer is a complex and diverse group of diseases Cancer is a complex and diverse group of diseases "
                className="block w-full h-16 rounded-md py-1 px-2 bg-[#3232470F] text-[#000000] placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        )}
        {preference === 2 && (
          <div>
            <div className="text-black font-bold text-left">Link</div>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="link"
                id="link"
                placeholder="willie.jennings@example.com"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="block w-full rounded-md py-1 px-2 bg-[#3232470F] text-[#000000] placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        )}
        {preference === 3 && (
          <div>
            <div className="text-black text-left font-bold">Answer:</div>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="answer"
                id="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Cancer is a complex and diverse group of diseases Cancer is a complex and diverse group of diseases "
                className="block w-full h-16 rounded-md py-1 px-2 bg-[#3232470F] text-[#000000] placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        )}
        {preference === 3 && (
          <div>
            <div className="text-black font-bold text-left">Link</div>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="link"
                id="link"
                placeholder="willie.jennings@example.com"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="block w-full rounded-md py-1 px-2 bg-[#3232470F] text-[#000000] placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        )}
        <div className="text-black font-bold text-left">Intent</div>
        <div>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="intent"
              id="intent"
              placeholder="Heal Cancer"
              value={intent}
              onChange={(e) => setIntent(e.target.value)}
              className="block w-full rounded-md py-1 px-2 bg-[#3232470F] text-[#000000] placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div
        onClick={() => (edit ? editHandler() : saveHandler())}
        className="py-4 w-3/4 ml-8"
      >
        <PrimaryButton text={"Upload"} color={"bg-[#936CAB]"} />
      </div>
    </div>
  );
};

export default QAForm;
