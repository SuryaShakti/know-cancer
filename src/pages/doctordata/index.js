import { approveDoctor, getAllDoctors, rejectDoctor } from "@/apis/doctors";
import DoctorData from "@/components/Tables/DoctorData";
import { Tab } from "@headlessui/react";
import { DocumentDownloadIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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

const DoctorsData = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const router = useRouter();
  const [loading, setLoading] = useState("false");
  const [doctorsData, setDoctorsData] = useState([]);

  const getData = async () => {
    try {
      setLoading(true);
      const doctors = await getAllDoctors();
      console.log(doctors);
      setDoctorsData(doctors);
      setLoading(false);
    } catch (error) {
      toast.error(error ? error : "Something went wrong", "bottom-right");
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleButtonClick = (url) => {
    const pdfUrl = "/path/to/your/pdf.pdf"; // Replace with the actual URL of your PDF
    window.open(url, "_blank");
  };

  const approveHandler = async (id) => {
    try {
      const response = await approveDoctor(id);

      const _doctors = [...doctorsData];

      setDoctorsData([
        ..._doctors.filter((item, index) => item._id !== response._id),
        response,
      ]);
    } catch (error) {
      toast.error(error ? error : "Something went wrong", "bottom-right");
    }
  };

  const rejectHandler = async (id) => {
    try {
      const response = await rejectDoctor(id);

      const _doctors = [...doctorsData];

      setDoctorsData([
        ..._doctors.filter((item, index) => item._id !== response._id),
      ]);
    } catch (error) {
      toast.error(error ? error : "Something went wrong", "bottom-right");
    }
  };

  return (
    <div>
      <div className="text-gray-600 font-semibold text-xl">Doctors Data</div>{" "}
      <div className="mt-5">
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
              <div className="w-full relative rounded-lg ">
                <table className="w-full text-left">
                  <thead className="w-full text-base text-[#667085] Table ">
                    <tr className="grid grid-cols-4 w-full">
                      <th scope="col" className="py-3">
                        Doctor Name
                      </th>
                      <th scope="col" className="py-3">
                        Document
                      </th>
                      <th scope="col" className="py-3">
                        Speciality
                      </th>
                      <th scope="col" className="py-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctorsData
                      ?.filter((item, index) => item.status === 1)
                      .map((item, index) => (
                        <tr className="w-full grid grid-cols-4  border-b shadow-[0_4px_14px_rgba(0, 0, 0, 0.05)]">
                          <td className="py-4 text-base">
                            {item?.createdBy?.name
                              ? item?.createdBy?.name
                              : "N/A"}
                          </td>
                          <td className="py-4 text-[#6A6A6A] font-normal">
                            {item?.documents[0] ? (
                              <DocumentDownloadIcon
                                onClick={() =>
                                  handleButtonClick(item?.documents[0])
                                }
                                className="w-6 h-6 text-[#936CAB]"
                              />
                            ) : (
                              "N/A"
                            )}
                          </td>
                          <td className="py-4">{item.speciality}</td>
                          <td className="flex space-x-5 py-4  rounded-md font-semibold text-sm">
                            <div className=" sm:flex items-center ">
                              <div
                                className=" font-normal text-sm w-full bg-[#936CAB] mr-2 rounded-md "
                                onClick={() => approveHandler(item._id)}
                              >
                                <button className="whitespace-nowrap px-2 py-1 text-sm text-white font-semibold">
                                  Approve
                                </button>{" "}
                              </div>
                            </div>
                            <div className=" sm:flex items-center ">
                              <div
                                className=" font-normal text-sm w-full border border-[#936CAB] mr-2 rounded-md"
                                onClick={() => rejectHandler(item._id)}
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
              <div className="w-full relative rounded-lg ">
                <table className="w-full text-left">
                  <thead className="w-full text-base text-[#667085] Table">
                    <tr className="w-full grid grid-cols-4">
                      <th scope="col" className=" py-3">
                        Doctor Name
                      </th>
                      <th scope="col" className="py-3">
                        Document
                      </th>
                      <th scope="col" className="py-3">
                        Speciality
                      </th>
                      <th scope="col" className=" py-3">
                        Code
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctorsData
                      ?.filter((item, index) => item.status === 2)
                      .map((item, index) => (
                        <tr className="w-full grid grid-cols-4 border-b shadow-[0_4px_14px_rgba(0, 0, 0, 0.05)]">
                          <td className=" py-4 text-base">
                            {item?.createdBy?.name}
                          </td>
                          <td className=" py-4 text-[#6A6A6A] font-normal">
                            {item?.documents[0] ? (
                              <DocumentDownloadIcon
                                onClick={() =>
                                  handleButtonClick(item?.documents[0])
                                }
                                className="w-6 h-6 text-[#936CAB]"
                              />
                            ) : (
                              "N/A"
                            )}
                          </td>
                          <td className="">{item.speciality}</td>
                          <td className="">{item.code}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default DoctorsData;
