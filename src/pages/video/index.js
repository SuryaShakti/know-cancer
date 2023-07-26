import { SearchIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import AddVideoDialog from "@/components/Dialogs/AddVideoDialog";
import { getAllVideos } from "@/apis/videos";
import YouTube from "react-youtube";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { getAllQuestions } from "@/apis/qna";

const YouTubeVideo = ({ videoUrl }) => {
  const getVideoIdFromUrl = (url) => {
    const videoIdRegex =
      /(?:\?v=|&v=|youtu\.be\/|\/embed\/|\/v\/|\/\d{1,2}\/|\/vi\/)([^#\&\?]{11})(?:[a-z]{0,10}=[^#\&\?]{0,100})?/i;
    const match = url.match(videoIdRegex);
    return match && match[1];
  };

  const videoId = getVideoIdFromUrl(videoUrl);

  if (!videoId) {
    return <p>Invalid YouTube video URL</p>;
  }

  const opts = {
    height: "auto",
    width: "100%",
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

const Video = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [current, setCurrent] = useState();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [questions, setQuestions] = useState([]);
  const getQuestions = async () => {
    console.log("runned");
    try {
      setLoading(true);

      const response = await getAllQuestions();
      console.log(response.filter((item) => item.preference === 2));
      setData(
        response.filter(
          (item) => item.preference === 2 || item.preference === 3
        )
      );
      setLoading(false);
    } catch (error) {
      toast.error(error ? error : "Something went wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  // const getData = async () => {
  //   try {
  //     setLoading(true);
  //     const data = await getAllVideos();
  //     console.log(data);
  //     setData(data);
  //     setLoading(false);
  //   } catch (error) {
  //     toast.error(error ? error : "Something went wrong", "bottom-right");
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="w-auto justify-start font-semibold text-xl text-[#374151] ">
          Videos
        </div>
        {/* <div className=" sm:flex items-center md:ml-32">
          <div
            className=" font-normal text-sm w-full bg-[#936CAB] mr-2 rounded-md"
            onClick={() => setOpen(true)}
          >
            <button className="whitespace-nowrap px-3 py-1 text-sm text-white font-semibold">
              + Add New Video
            </button>
          </div>{" "}
        </div> */}

        <AddVideoDialog
          open={open}
          setOpen={setOpen}
          data={data}
          setData={setData}
        />
      </div>
      {/* -------------------------------------------------------------------------------------------------------- */}

      {loading ? (
        <div className="flex justify-center w-full py-20">
          <ClipLoader />
        </div>
      ) : (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 mt-10 rounded ">
          {data?.map((item, index) => (
            <div
              key={index}
              className="py-3 px-3 rounded-lg shadow-[4px_4px_4px_2px_#936CAB]"
            >
              <YouTubeVideo videoUrl={item.link} />
              <p className="font-semibold text-sm px-2">{item?.tagLine}</p>
              <p className="font-semibold text-sm px-2 py-2">
                Intents: {item?.intent}
              </p>
            </div>
          ))}
          {/* <div className="py-4 px-3 rounded-lg shadow-[4px_4px_4px_2px_#936CAB]">
          <div className="bg-gray-200 w-full h-28 rounded-md"></div>
          <div className="grid grid-cols-2 ">
            <div
              onClick={() => setOpen1(true)}
              className="text-sm font-normal text-white bg-[#936CAB] flex m-2 p-2 px-7 rounded w-fit"
            >
              <button>View</button>
            </div>
            <div
              onClick={() => setOpen1(true)}
              className="text-sm font-normal text-white bg-[#936CAB] flex m-2 p-2 px-7 rounded w-fit"
            >
              <button>Delete</button>
            </div>
          </div>
        </div> */}
        </div>
      )}
    </div>
  );
};

export default Video;
