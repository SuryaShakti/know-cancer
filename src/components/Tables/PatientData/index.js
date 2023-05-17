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
          <thead class="text-base text-black Table">
            <tr>
              <th scope="col" class="px-6 py-3">
                #
              </th>
              <th scope="col" class="px-8 py-3">
                Patient Name
              </th>
              <th scope="col" class="px-8 py-3">
                Gender
              </th>
              <th scope="col" class="px-8 py-3">
                Diseases
              </th>
              <th scope="col" class="px-8 py-3">
                Report
              </th>
              <th scope="col" class="px-8 py-3">
                Dr.Code
              </th>
              <th scope="col" class="px-10 py-3">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {patientdata.map((item, index) => (
              <tr class="bg-white border-b shadow-[0_4px_14px_rgba(0, 0, 0, 0.05)]">
                <td class="px-6 py-4">
                  {" "}
                  <img src={"/images/image3.png"} className="w-12 rounded-md" />
                </td>
                <td class="px-6 py-4 font-medium text-base">{item.name}</td>
                <td class="px-6 py-4 text-[#6A6A6A] font-normal">
                  {item.gender}
                </td>
                <td class="my-6 p-1 border border-[#FF6E6E] text-[#FF6E6E] absolute rounded-md font-medium text-sm">
                  {item.disease}
                </td>
                <td class="px-6 py-4 text-[#1DCE4F]">Viewed</td>
                <td class="px-6 py-4 text-[#6A6A6A] font-normal">
                  {item.drcode}{" "}
                </td>
                <td class="my-6 p-1 border border-[#575AE5] text-[#575AE5] absolute rounded-md font-medium text-sm">
                  {item.details}
                </td>{" "}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientData;
