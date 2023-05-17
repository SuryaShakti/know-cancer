import React,{useState} from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPEG", "PNG", "GIF"];


const Profile = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div>
      {" "}
      <div className="font-bold text-[#374151] text-left ">Profile</div>
      <div className="Background p-4 rounded-md w-full h-100 ">
        <div className="bg p-5">
          <div className="text-gray-500 ">Name</div>
          <div className="my-2">
            <div className="relative mt-2 rounded-md shadow-sm w-1/3">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="text-gray-500 ">Phone Number</div>
          <div className="my-2">
            <div className="relative mt-2 rounded-md shadow-sm w-1/3">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="text-gray-500 ">E-mail</div>
          <div className="my-2">
            <div className="relative mt-2 rounded-md shadow-sm ">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="text-gray-500 ">Address</div>
          <div className="my-2">
            <div className="relative mt-2 rounded-md shadow-sm ">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className=" grid md:grid-cols-3 ">
            <div>
              <div className="text-gray-500 ">City</div>
              <div className="my-2">
                <div className="relative mt-2 rounded-md shadow-sm p-2">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>{" "}
            <div>
              <div className="text-gray-500 ">Country</div>
              <div className="my-2">
                <div className="relative mt-2 rounded-md shadow-sm p-2 ">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>{" "}
            <div>
              <div className="text-gray-500 ">Postal Code</div>
              <div className="my-2">
                <div className="relative mt-2 rounded-md shadow-sm p-2">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" grid md:grid-cols-3 ">
            <div>
              <div className="text-gray-500 ">License Country</div>
              <div className="my-2">
                <div className="relative mt-2 rounded-md shadow-sm p-2">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>{" "}
            <div>
              <div className="text-gray-500 ">License of</div>
              <div className="my-2">
                <div className="relative mt-2 rounded-md shadow-sm p-2 ">
                  <select
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>{" "}
            <div className=" grid md:grid-cols-2 ">
              <div>
                <div className="text-gray-500 ">License Number</div>
                <div className="my-2">
                  <div className="relative mt-2 rounded-md shadow-sm p-2 ">
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="text-gray-500 ">NPI Number</div>
                <div className="my-2">
                  <div className="relative mt-2 rounded-md shadow-sm p-2 ">
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div>
                <FileUploader
                  multiple={true}
                  style={{ display: "block", border: "solid" }}
                  handleChange={handleChange}
                  name="file"
                  // types={fileTypes}
                />
                <p>{file ? `File name: ${file[0].name}` : ""}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
