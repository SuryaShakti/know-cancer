import React,{useState} from "react";
import { FileUploader } from "react-drag-drop-files";
import PrimaryButton from "../../Buttons/PrimaryButton";
import SignUpDialog from "@/components/Dialogs/SignUpDialog";


const fileTypes = ["JPEG", "PNG", "GIF"];

const OtherInfo = () => {
  const [open, setOpen] = useState(false);

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="w-4/5">
      <div className="font-bold text-gray-800 text-left text-xl py-2">
        SignUp
      </div>
      <div className="bg-white rounded-md p-10">
        <div className="text-gray-500 ">Medical school</div>
        <div className="relative mt-2 my-3 rounded-md shadow-sm w-3/4">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="grid md:grid-cols-2">
          <div>
            <div className="text-gray-500 ">Degree</div>
            <div className="relative mt-2  rounded-md shadow-sm px-2">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="text-gray-500 ">Year</div>
            <div className="relative mt-2  rounded-md shadow-sm px-10">
              <select
                text="selcet"
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="font-bold text-gray-800 text-left text-xl py-2">
          Medical Board License
        </div>{" "}
        <div className="text-gray-500 ">License Country</div>
        <div className="relative mt-2 my-3 rounded-md shadow-sm w-2/4">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="text-gray-500 ">License of</div>
        <div className="relative mt-2 my-3 rounded-md shadow-sm w-2/4">
          <select
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="grid md:grid-cols-2">
          <div>
            <div className="text-gray-500 ">License Number</div>
            <div className="relative mt-2  rounded-md shadow-sm px-2">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="text-gray-500 ">NPI Number</div>
            <div className="relative mt-2  rounded-md shadow-sm px-10">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="App w-1/2 py-5">
          <FileUploader
            multiple={true}
            style={{ display: "block" }}
            handleChange={handleChange}
            name="file"
            // types={fileTypes}
          />
          <p>{file ? `File name: ${file[0].name}` : ""}</p>
        </div>
        <div onClick={() => setOpen(true)}>
          <PrimaryButton text={"Next"} color={"bg-[#575AE5]"} />
        </div>
        <SignUpDialog open={open} setOpen={setOpen}/>
      </div>
    </div>
  );
};

export default OtherInfo;
