import React from "react";
import { Tab } from "@headlessui/react";

const doctordata = [
  {
    id: 1,
    name: "Eathel Howord",
    gender: "Female",
    status: "Pending",
  },
  {
    id: 2,
    name: "Eathel Howord",
    gender: "Female",
    status: "Pending",
  },
  {
    id: 3,
    name: "Eathel Howord",
    gender: "Female",
    status: "Pending",
  },
  {
    id: 4,
    name: "Eathel Howord",
    gender: "Female",
    status: "Pending",
  },
  {
    id: 5,
    name: "Eathel Howord",
    gender: "Female",
    status: "Pending",
  },
  {
    id: 5,
    name: "Eathel Howord",
    gender: "Female",
    status: "Pending",
  },
  {
    id: 5,
    name: "Eathel Howord",
    gender: "Female",
    status: "Pending",
  },
  {
    id: 5,
    name: "Eathel Howord",
    gender: "Female",
    status: "Pending",
  },
];

const DoctorData = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Tab.Group>
        <Tab.List>
          <Tab className="  px-12 py-1 border rounded-md ">
            {({ selected }) => (
              <div
                className={
                  selected
                    ? "border-b-2 border-[#936CAB]"
                    : "bg-white text-black"
                }
              >
                New Doctors
              </div>
            )}
          </Tab>
          <Tab className=" px-12 py-1 border rounded-md ">
            {({ selected }) => (
              <div
                className={
                  selected
                    ? "border-b-2 border-[#936CAB]"
                    : "bg-white text-black"
                }
              >
                Existing Doctors
              </div>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div class="relative rounded-lg ">
              <table class="text-left">
                <thead class="text-base text-[#667085] Table ">
                  <tr>
                    <th scope="col" class="px-16 py-3">
                      Doctor Name
                    </th>
                    <th scope="col" class="px-12 py-3">
                      Document
                    </th>
                    <th scope="col" class="px-16 py-3">
                      Speciality
                    </th>
                    <th scope="col" class="px-28 py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {doctordata.map((item, index) => (
                    <tr class="bg-white border-b shadow-[0_4px_14px_rgba(0, 0, 0, 0.05)]">
                      <td class="px-12 py-4 text-base">Khushal Trivedi</td>
                      <td class="px-12 py-4 text-[#6A6A6A] font-normal">
                        Doc.pdf
                      </td>
                      <td class="px-16">Liver Cancer</td>
                      <td class="flex justify-between px-14 py-4 absolute rounded-md font-semibold text-sm">
                        <div className=" sm:flex items-center ">
                          <div
                            className=" font-normal text-sm w-full bg-[#936CAB] mr-2 rounded-md "
                            onClick={() => setOpen(true)}
                          >
                            <button className="whitespace-nowrap px-2 py-1 text-sm text-white font-semibold">
                              Approve
                            </button>{" "}
                          </div>
                        </div>
                        <div className=" sm:flex items-center ">
                          <div
                            className=" font-normal text-sm w-full border border-[#936CAB] mr-2 rounded-md"
                            onClick={() => setOpen(true)}
                          >
                            <button className="whitespace-nowrap px-3 py-1 text-sm text-[#936CAB] font-semibold">
                              Reject
                            </button>{" "}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            {" "}
            <div class="relative rounded-lg ">
              <table class="text-left">
                <thead class="text-base text-[#667085] Table">
                  <tr>
                    <th scope="col" class="px-16 py-3">
                      Doctor Name
                    </th>
                    <th scope="col" class="px-12 py-3">
                      Document
                    </th>
                    <th scope="col" class="px-20 py-3">
                      Speciality
                    </th>
                    <th scope="col" class="px-20 py-3">
                      Code
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {doctordata.map((item, index) => (
                    <tr class="bg-white border-b shadow-[0_4px_14px_rgba(0, 0, 0, 0.05)]">
                      <td class="px-12 py-4 text-base">Khushal Trivedi</td>
                      <td class="px-12 py-4 text-[#6A6A6A] font-normal">
                        Doc.pdf
                      </td>
                      <td class="px-20">Liver Cancer</td>
                      <td class="px-20">783044</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      {/* <div class="relative rounded-lg ">
        <table class="text-left">
          <thead class="text-base text-[#667085] Table">
            <tr>
              <th scope="col" class="px-16 py-3">
                Doctor Name
              </th>
              <th scope="col" class="px-12 py-3">
                Document
              </th>
              <th scope="col" class="px-16 py-3">
                Speciality
              </th>
              <th scope="col" class="px-20 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {doctordata.map((item, index) => (
              <tr class="bg-white border-b shadow-[0_4px_14px_rgba(0, 0, 0, 0.05)]">
                <td class="px-12 py-4 text-base">Khushal Trivedi</td>
                <td class="px-12 py-4 text-[#6A6A6A] font-normal">Doc.pdf</td>
                <td class="px-20">Liver Cancer</td>
                <td class="flex justify-between px-5 py-4 absolute rounded-md font-semibold text-sm">
                  <div className=" sm:flex items-center ">
                    <div
                      className=" font-normal text-sm w-full bg-[#936CAB] mr-2 rounded-md "
                      onClick={() => setOpen(true)}
                    >
                      <button className="whitespace-nowrap px-2 py-1 text-sm text-white font-semibold">
                        Approve
                      </button>{" "}
                    </div>
                  </div>
                  <div className=" sm:flex items-center ">
                    <div
                      className=" font-normal text-sm w-full border border-[#936CAB] mr-2 rounded-md"
                      onClick={() => setOpen(true)}
                    >
                      <button className="whitespace-nowrap px-3 py-1 text-sm text-[#936CAB] font-semibold">
                        Reject
                      </button>{" "}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody> */}
      {/* <tbody>
            {data?.map((item, index) => (
              <tr class="bg-white border-b shadow-[0_4px_14px_rgba(0, 0, 0, 0.05)]">
                <td class="px-6 py-4">
                  {item?.createdBy?.avatar ? (
                    <img
                      src={item?.createdBy?.avatar}
                      className="w-12 rounded-md"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-green-200 text-gray-600 font-bold text-xl flex justify-center items-center rounded-md">
                      {item?.createdBy?.name.slice(0, 1)}
                    </div>
                  )}
                </td>
                <td class="px-12 py-4 font-medium text-base">
                  {item?.createdBy?.name ? item?.createdBy?.name : "N/A"}
                </td>
                <td class="px-12 py-4 text-[#6A6A6A] font-normal">
                  {item.speciality}
                </td>
                <td class="px-12 py-4 text-[#6A6A6A] font-normal">
                  {item.degree}
                </td>
                <td class="px-12 py-4 text-[#6A6A6A] font-normal">
                  {item.createdBy.gender ? "Male" : "Female"}
                </td>
                <td class="px-12 py-4 text-[#1DCE4F]">View</td>
                <td class="my-6 px-10 border border-[#575AE5] text-[#575AE5] absolute rounded-md font-medium text-sm">
                  {item.status === 2 ? "Pending" : "Approved"}
                </td>
              </tr>
            ))}
          </tbody> */}
      {/* </table>
      </div> */}
    </div>
  );
};

export default DoctorData;
