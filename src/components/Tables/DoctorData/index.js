import React from "react";
//  const doctordata = [
//    {
//      id: 1,
//      name: "Eathel Howord",
//      gender: "Female",
//      status: "Pending",
//    },
//    {
//      id: 2,
//      name: "Eathel Howord",
//      gender: "Female",
//      status: "Pending",
//    },
//    {
//      id: 3,
//      name: "Eathel Howord",
//      gender: "Female",
//      status: "Pending",
//    },
//    {
//      id: 4,
//      name: "Eathel Howord",
//      gender: "Female",
//      status: "Pending",
//    },
//    {
//      id: 5,
//      name: "Eathel Howord",
//      gender: "Female",
//      status: "Pending",
//    },
//  ];

const DoctorData = ({ data }) => {
  console.log(data);
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
                Speciality
              </th>
              <th scope="col" class="px-12 py-3">
                Degree
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorData;
