import { getAllPateints } from "@/apis/pateints";
import { DocumentDownloadIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const patientdata = [
  {
    id: 1,
    name: "Devin Shelton",
    gender: "Male",
    disease: "Lung Cancer",
    drcode: 394823,
    details: "Still in progress",
  },
  {
    id: 2,
    name: "Devin Shelton",
    gender: "Male",
    disease: "Lung Cancer",
    drcode: 394823,
    details: "Still in progress",
  },
  {
    id: 3,
    name: "Devin Shelton",
    gender: "Male",
    disease: "Lung Cancer",
    drcode: 394823,
    details: "Still in progress",
  },
  {
    id: 4,
    name: "Devin Shelton",
    gender: "Male",
    disease: "Lung Cancer",
    drcode: 394823,
    details: "Still in progress",
  },
  {
    id: 5,
    name: "Devin Shelton",
    gender: "Male",
    disease: "Lung Cancer",
    drcode: 394823,
    details: "Still in progress",
  },
  {
    id: 6,
    name: "Devin Shelton",
    gender: "Male",
    disease: "Lung Cancer",
    drcode: 394823,
    details: "Still in progress",
  },
];

const PatientData = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      setLoading(true);
      const data = await getAllPateints();
      console.log(data);
      setData(data);
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

  return (
    <div>
      <div className="relative w-full rounded-lg ">
        <table className="w-full text-left">
          <thead className="w-full text-base text-[#667085] ">
            <tr className="w-full grid grid-cols-4 ">
              <th scope="col" className=" py-3">
                Patient Name
              </th>
              <th scope="col" className=" py-3">
                Report
              </th>
              <th scope="col" className=" py-3">
                Contact Details
              </th>
              <th scope="col" className=" py-3">
                Consulting Doctor
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr className="grid grid-cols-4 bg-white border-b shadow-[0_4px_14px_rgba(0, 0, 0, 0.05)]">
                <td className=" py-4 font-medium text-base">{item?.name}</td>
                <td className=" py-4 text-[#6A6A6A] font-normal">
                  {item?.userHealthRecord?.healthRecord[0] ? (
                    <DocumentDownloadIcon
                      onClick={() =>
                        handleButtonClick(
                          item?.userHealthRecord?.healthRecord[0]
                        )
                      }
                      className="w-6 h-6 text-[#936CAB]"
                    />
                  ) : (
                    "N/A"
                  )}
                </td>
                <td className="">{item?.phone ? item.phone : "N/A"}</td>
                <td className="py-4 ">
                  {item?.doctor?.name ? item.doctor.name : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientData;
