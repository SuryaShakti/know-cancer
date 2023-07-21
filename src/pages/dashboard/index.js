import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { DocumentDownloadIcon, SearchIcon } from "@heroicons/react/outline";
// import PatientDataDialog from "@/components/Dialogs/PatientDataDialog";
// import DoctorDataDialog from "@/components/Dialogs/DoctorDataDialog";
import ReadMoreDialog from "@/components/Dialogs/ReadMoreDialog";
import { getAllPateints } from "@/apis/pateints";
import { getAllDoctors } from "@/apis/doctors";
import { toast } from "react-toastify";
import AddQADialog from "@/components/Dialogs/AddQ&ADialog";
import { getDoctorGraphData, getPatientGraphData } from "@/apis/garph";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const question = {
  id: 1,
  question: "What is Cancer?",
  answer:
    "Consectetur aliquip ipsum amet id occaecat Lorem sit qui. Nostrud sint proident cupidatat voluptate fugiat commodo duis dolore est id. Do sunt cupidatat aute aliqua.",
};

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const router = useRouter();
  const [loading, setLoading] = useState("false");
  const [data, setData] = useState([]);
  const [doctorsData, setDoctorsData] = useState([]);
  const [doctorGraphData, setDoctorGraphData] = useState();
  const [doctorDates, setDoctorDates] = useState([]);
  const [doctorCounts, setDoctorCounts] = useState([]);
  const [patintDates, setPatientDates] = useState([]);
  const [PatientCounts, setPatientCounts] = useState([]);

  const getData = async () => {
    try {
      setLoading(true);
      const data = await getAllPateints();
      const doctors = await getAllDoctors();
      const doctorGraph = await getDoctorGraphData();
      const patientGraph = await getPatientGraphData();
      console.log("data", data.data);
      console.log("Doctors -------------------data", doctors.data);
      setData(data);
      setDoctorsData(doctors);
      setDoctorGraphData(doctorGraph);
      setDoctorDates(doctorGraph.map((item) => item.date));
      setDoctorCounts(doctorGraph.map((item) => item.count));
      setPatientDates(patientGraph.map((item) => item.date));
      setPatientCounts(patientGraph.map((item) => item.count));
      setLoading(false);
    } catch (error) {
      toast.error(error ? error : "Something went wrong", "bottom-right");
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const doctorChartData = {
    labels: doctorDates,
    datasets: [
      {
        label: "Count",
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75, 192, 192, 0.8)",
        hoverBorderColor: "rgba(75, 192, 192, 1)",
        data: doctorCounts,
      },
    ],
  };
  const patientChartData = {
    labels: patintDates,
    datasets: [
      {
        label: "Count",
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75, 192, 192, 0.8)",
        hoverBorderColor: "rgba(75, 192, 192, 1)",
        data: PatientCounts,
      },
    ],
  };

  // Chart options configuration
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const handleButtonClick = (url) => {
    const pdfUrl = "/path/to/your/pdf.pdf"; // Replace with the actual URL of your PDF
    window.open(url, "_blank");
  };

  return (
    <div className="flex p-2">
      <div className="p-2">
        <div className="flex justify-between items-center">
          <div className="justify-start font-bold text-[#374151] ">
            Dashboard
          </div>

          {/* <div className=" sm:flex items-center md:ml-32">
            <div
              className=" font-normal text-sm w-full bg-[#936CAB] mr-2 rounded-md"
              onClick={() => setOpen1(true)}
            >
              <button className="whitespace-nowrap px-3 py-1 text-sm text-white font-semibold">
                + Add New Information
              </button>
            </div>
          </div> */}
        </div>
        <AddQADialog open={open1} setOpen={setOpen1} />
        {/* //---------------------------------------------------------------------------------- */}
        <div className="grid lg:grid-cols-10 gap-5 py-6">
          <div className="lg:col-span-7">
            <div className="flex justify-between space-x-3 items-center">
              <div className="shadow w-1/2 py-4 px-4 rounded-lg  ">
                Doctors Joined platform per week
                {/* <DoctorsChart/> */}
                <Bar data={doctorChartData} options={chartOptions} />
                {/* <div className="bg-gray-200 w-full h-40"></div> */}
              </div>{" "}
              <div className="shadow  w-1/2  py-4 px-4 rounded-lg ">
                No. of patient joined this week
                <Bar data={patientChartData} options={chartOptions} />
                {/* <div className="bg-gray-200 w-full h-40"></div> */}
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="shadow py-1 px-3 rounded-lg ">
              <div className="font-bold text-lg">Q&A</div>
              <div className="h-5 py-2 text-[#E61323] text-lg font-['Poppins']">
                Question- {question.question}
              </div>
              <div className="font-normal text-sm py-5">
                {question.answer.slice(0, 110)}{" "}
                <button
                  className="text-[#936CAB]"
                  onClick={() => setOpen(true)}
                >
                  ....Read It
                </button>
                <div className="flex justify-end w-full py-2">
                  <button
                    onClick={() => router.push("/questions")}
                    className="text-[#936CAB] font-bold"
                  >
                    View All
                  </button>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>

        {/* //-----------------------------   PATIENT DATA SECTION ------------------------------------------- */}
        <div>
          <div className="flex justify-between mb-1">
            <div className="text-gray-800 font-semibold text-lg">
              Patient Data
            </div>
            <button
              className="text-[#936CAB] text-sm px-10 font-bold"
              onClick={() => router.push("/pateintsdata")}
            >
              View All
            </button>
          </div>
          <div className="grid lg:grid-cols-3 gap-3">
            {data
              ?.filter((item, index) => index < 3)
              .map((item, index) => (
                <div className="py-4 px-4  border rounded-md ">
                  <div className="flex items-center space-x-3">
                    {item?.avatar ? (
                      <img src={item?.avatar} className="w-12 rounded-md" />
                    ) : (
                      <div className="w-12 h-12 bg-green-200 text-gray-600 font-bold text-xl flex justify-center items-center rounded-md">
                        {item?.name?.slice(0, 1)}
                      </div>
                    )}
                    <div className="flex-1">
                      <div className=" text-gray-800 font-semibold">
                        {item.name}
                      </div>
                      <div className=" text-gray-500 ">
                        {item.gender === 1
                          ? "Male"
                          : item.gender === 2
                          ? "Female"
                          : "Others"}
                      </div>
                    </div>
                    <div className="whitespace-nowrap w-fit px-1 py-1 text-sm rounded-md border border-[#936CAB]">
                      Still in progress
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <div className="">
                      <div className="text-sm text-[#936CAB]">Diagnosis</div>
                      <div className="text-sm text-gray-700">
                        {item?.userHealthRecord?.diagnosis?.name
                          ? item?.userHealthRecord?.diagnosis?.name
                          : "N/A"}
                      </div>
                    </div>
                    <div className="">
                      <div className="text-sm text-[#936CAB]">Age</div>
                      <div className="text-sm text-gray-700">
                        {item?.userHealthRecord?.age
                          ? item?.userHealthRecord?.age
                          : "N/A"}
                      </div>
                    </div>
                    <div className="">
                      <div className="text-sm text-[#936CAB]">Phone</div>
                      <div className="text-sm text-gray-700">
                        {item?.phone ? item?.phone : "N/A"}
                      </div>
                    </div>
                    <DocumentDownloadIcon
                      onClick={() =>
                        handleButtonClick(
                          item?.userHealthRecord?.healthRecord[0]
                        )
                      }
                      className="w-6 h-6 text-[#936CAB]"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* ---------------------------------------------DOCTORS DATA------------------------------ */}
        <div className="mt-5">
          <div className="flex justify-between mb-1">
            <div className="text-gray-800 font-semibold text-lg">
              Doctors Data
            </div>
            <button
              className="text-[#936CAB] text-sm px-10 font-bold"
              onClick={() => router.push("/doctordata")}
            >
              View All
            </button>
          </div>
          <div className="grid lg:grid-cols-3 gap-3">
            {doctorsData
              ?.filter((item, index) => index < 3)
              .map((item, index) => (
                <div className="py-4 px-4 border rounded-md ">
                  <div className="flex items-center space-x-3">
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
                    <div className="flex-1">
                      <div className=" text-gray-800 font-semibold">
                        {item?.createdBy?.name}
                      </div>
                      <div className=" text-gray-500 ">
                        {item.createdBy?.gender === 1
                          ? "Male"
                          : item.createdBy?.gender === 2
                          ? "Female"
                          : "Others"}
                      </div>
                    </div>
                    <div className="whitespace-nowrap w-fit px-1 py-1 text-sm rounded-md border border-[#936CAB]">
                      Still in progress
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <div className="">
                      <div className="text-sm text-[#936CAB]">Speciality</div>
                      <div className="text-sm text-gray-700">
                        {item?.speciality ? item?.speciality : "N/A"}
                      </div>
                    </div>
                    <div className="">
                      <div className="text-sm text-[#936CAB]">Age</div>
                      <div className="text-sm text-gray-700">
                        {item?.userHealthRecord?.age
                          ? item?.userHealthRecord?.age
                          : "N/A"}
                      </div>
                    </div>
                    <div className="">
                      <div className="text-sm text-[#936CAB]">Phone</div>
                      <div className="text-sm text-gray-700">
                        {item?.phone ? item?.phone : "N/A"}
                      </div>
                    </div>
                    <DocumentDownloadIcon
                      onClick={() => handleButtonClick(item?.documents[0])}
                      className="w-6 h-6 text-[#936CAB]"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>

        <ReadMoreDialog open={open} setOpen={setOpen} />
      </div>
      <div>
        <div className="h-full w-52 shadow py-1 p-3 rounded-lg text-left">
          {" "}
          <div className="font-semibold text-lg"> Notifications</div>
          <div className="flex text-black pt-2 text-sm">
            You have a new QA to check..
          </div>
          <div className=" flex w-auto justify-start text-[#7E7E7E] text-sm pt-1">
            Just now
          </div>
          <div className="flex text-black pt-2 text-sm">
            You have a new QA to check..
          </div>
          <div className=" flex w-auto justify-start text-[#7E7E7E] text-sm pt-1">
            Just now
          </div>
          <div className="flex text-black pt-2 text-sm">
            You have a new QA to check..
          </div>
          <div className=" flex w-auto justify-start text-[#7E7E7E] text-sm pt-1">
            Just now
          </div>
          <div className="font-semibold text pt-10">New support tickets</div>
          <div className="flex text-black pt-2 text-sm">
            You have a new QA to check..
          </div>
          <div className=" flex w-auto justify-start text-[#7E7E7E] text-sm pt-1">
            Just now
          </div>
          <div className="flex text-black pt-2 text-sm">
            You have a new QA to check..
          </div>
          <div className=" flex w-auto justify-start text-[#7E7E7E] text-sm pt-1">
            Just now
          </div>
          <div className="flex text-black pt-2 text-sm">
            You have a new QA to check..
          </div>
          <div className=" flex w-auto justify-start text-[#7E7E7E] text-sm pt-1">
            Just now
          </div>
          <div className="font-semibold text pt-10">New doctors joining</div>
          <div className="font-normal pt-2">Natali Craig</div>
          <div className="font-normal pt-2">Natali Craig</div>{" "}
          <div className="font-normal pt-2">Natali Craig</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
