import React from "react";

const reviews = [
  {
    id: 1,
    line1: "Ultimately the reliable product",
    line2:
      "“Super lovely product. I love this product because the software is brilliantly helpful. Can’t get enough! ...”",
  },
  {
    id: 2,
    line1: "Ultimately the reliable product",
    line2:
      "“Super lovely product. I love this product because the software is brilliantly helpful. Can’t get enough! ...”",
  },
  {
    id: 3,
    line1: "Ultimately the reliable product",
    line2:
      "“Super lovely product. I love this product because the software is brilliantly helpful. Can’t get enough! ...”",
  },
  {
    id: 4,
    line1: "Ultimately the reliable product",
    line2:
      "“Super lovely product. I love this product because the software is brilliantly helpful. Can’t get enough! ...”",
  },
  {
    id: 5,
    line1: "Ultimately the reliable product",
    line2:
      "“Super lovely product. I love this product because the software is brilliantly helpful. Can’t get enough! ...”",
  },
  {
    id: 6,
    line1: "Ultimately the reliable product",
    line2:
      "“Super lovely product. I love this product because the software is brilliantly helpful. Can’t get enough! ...”",
  },
];

const Review = () => {
  return (
    <div>
      {" "}
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        {reviews.map((item, index) => (
          <div className="shadow py-4 px-7 rounded-lg shadow-[4px_4px_4px_2px_rgba(230,19,35,0.5)]">
            <div className="flex space-x-2">
              <div className="text-black font-bold text-lg p-1 ">
                {item.line1}
              </div>
            </div>

            <div className=" text-black text-sm ">{item.line2}</div>
            <div className=" text-black text-sm ">[Name] reviews [Product Name]</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
