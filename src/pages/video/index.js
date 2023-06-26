import { SearchIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import AddVideoDialog from "@/components/Dialogs/AddVideoDialog";
import { getAllVideos } from "@/apis/videos";
import YouTube from "react-youtube";
import { ClipLoader } from "react-spinners";

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

  const getData = async () => {
    try {
      setLoading(true);
      const data = await getAllVideos();
      console.log(data);
      setData(data.data);
      setLoading(false);
    } catch (error) {
      toast.error(error ? error : "Something went wrong", "bottom-right");
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="flex flex-1 justify-between items-center">
        <div className="w-auto justify-start font-semibold text-xl text-[#374151] ">
          Video
        </div>
        <div className="hidden md:flex items-center md:ml-32">
          <div className="flex border rounded-full px-5 mx-8 w-full">
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
            className="flex font-normal text-sm w-full bg-[#936CAB] mr-2"
            onClick={() => setOpen(true)}
          >
            <button className="whitespace-nowrap px-3 py-1 text-sm text-white font-semibold">
              + Add Video
            </button>
          </div>{" "}
          <div className="flex justify-end w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#936CAB"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              />
            </svg>
          </div>
        </div>
        <AddVideoDialog
          open={open}
          setOpen={setOpen}
          data={data}
          setData={setData}
        />
      </div>
      {loading ? (
        <div className="flex justify-center w-full py-20">
          <ClipLoader />
        </div>
      ) : (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
          {data.map((item, index) => (
            <div key={index}>
              <YouTubeVideo videoUrl={item.link} />
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
