import React from "react";

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
  return (
    <div>
      <div class="relative rounded-lg ">
        <table class="text-left">
          <thead class="text-base text-[#667085] Table">
            <tr>
              <th scope="col" class="px-16 py-3">
                Patient Name
              </th>
              <th scope="col" class="px-12 py-3">
                Report
              </th>
              <th scope="col" class="px-16 py-3">
                Contact Details
              </th>
              <th scope="col" class="px-16 py-3">
                Consulting Doctor
              </th>
            </tr>
          </thead>
          <tbody>
            {patientdata.map((item, index) => (
              <tr class="bg-white border-b shadow-[0_4px_14px_rgba(0, 0, 0, 0.05)]">
              
                <td class="px-12 py-4 font-medium text-base">Bhumika Agarwal</td>
                <td class="px-12 py-4 text-[#6A6A6A] font-normal">
                Report
                </td>
                <td class="px-20">
                 9864538566
                </td>
                <td class="px-24 py-4 ">Dr. Venkatesh</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientData;
