import React,{useState} from "react";
import { useRouter } from "next/router";
import PatientDataDialog from "@/components/Dialogs/PatientDataDialog";
import DoctorDataDialog from "@/components/Dialogs/DoctorDataDialog";

const Dashboard = () => {

  const[open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false);

  const router = useRouter()
  return (
    <div>
      Dashboard
      <div>
        Patient Data
        <button
          className="text-[#F52C2C] font-medium text-sm px-10"
          onClick={() => setOpen(true)}
        >
          View All
        </button>
      </div>
      <PatientDataDialog open={open} setOpen={setOpen} />
      <div>
        Doctore Data
        <button
          className="text-[#F52C2C] font-medium text-sm px-10"
          onClick={() => setOpen1(true)}
        >
          View All
        </button>
      </div>
      <DoctorDataDialog open={open1} setOpen={setOpen1} />
    </div>
  );
};

export default Dashboard;
