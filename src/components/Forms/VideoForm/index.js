import { useState } from "react";
import React from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { useRouter } from "next/router";
import { BeatLoader } from "react-spinners";
import { addNewVideo } from "@/apis/videos";
import { toast } from "react-toastify";

const VideoForm = ({ data, setData, setIsOpen }) => {
  const [open, setOpen] = useState(false);

  const [tagLine, setTagLine] = useState("");
  const [link, setLink] = useState("");
  const [intent, setIntent] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const createVideo = async () => {
    try {
      setLoading(true);
      const response = await addNewVideo(tagLine, link, intent);
      console.log(response);

      const _data = [...data];
      setData([..._data, response]);
      setIsOpen(false);
      setLoading(false);
    } catch (error) {
      toast.error(error ? error : "Something went wrong", "bottom-right");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg px-5">
      {" "}
      <div className="font-bold text-gray-800 text-left text-xl py-5">
        ADD Video
      </div>
      <div className=" py-8 rounded-lg">
        <div className="text-black text-left font-bold">Video Tagline:</div>
        <div className="my-2">
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="tagline"
              id="tagline"
              value={tagLine}
              onChange={(e) => setTagLine(e.target.value)}
              className="block w-full rounded-md py-1.5 px-2 bg-[#3232470F] text-[#000000] placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="text-black text-left font-bold">Video Link:</div>
        <div className="my-2">
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="link"
              id="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
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
        onClick={() => createVideo()}
        className="rounded-md mt-5 text-white w-full py-2 bg-[#936CAB] hover:bg-[#936CAB]-800"
      >
        {loading ? <BeatLoader className="text-white" /> : "Save"}
      </button>
    </div>
  );
};

export default VideoForm;
