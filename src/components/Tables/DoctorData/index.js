import React from "react";
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
 ];

const DoctorData = () => {
  return (
    <div>
      <div class="relative rounded-lg ">
        <table class="text-left">
          <thead class="text-base text-black Table">
            <tr>
              <th scope="col" class="px-8 py-3">
                #
              </th>
              <th scope="col" class="px-12 py-3">
                Doctor Name
              </th>
              <th scope="col" class="px-12 py-3">
                Gender
              </th>
              <th scope="col" class="px-12 py-3">
                Documents
              </th>
              <th scope="col" class="px-12 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {doctordata.map((item, index) => (
              <tr class="bg-white border-b shadow-[0_4px_14px_rgba(0, 0, 0, 0.05)]">
                <td class="px-6 py-4">
                  {" "}
                  <img src={"/images/image2.png"} className="w-12 rounded-md" />
                </td>
                <td class="px-12 py-4 font-medium text-base">{item.name}</td>
                <td class="px-12 py-4 text-[#6A6A6A] font-normal">
                  {item.gender}
                </td>
                <td class="px-12 py-4 text-[#1DCE4F]">View</td>
                <td class="my-6 px-10 border border-[#575AE5] text-[#575AE5] absolute rounded-md font-medium text-sm">
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorData;
