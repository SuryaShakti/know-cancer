// import axios from "axios0";

// const API_URL = "https://api.knowcancer.braynixai.com";

// export const getPateintsReview = async () => {
//   try {
//     const token = localStorage.getItem("token");
//    let config = {
//      method: "get",
//      maxBodyLength: Infinity,
//      url: "http://13.200.83.188/v1/patient-reviews",
//      headers: {
//        Authorization: `Bearer ${token}`,
//      },
//      params: {
//        $populate: ["user"],
//      },
//    };
//     const response = await axios.request(config);
//     return response.data;
//   } catch (error) {
//     return error.response.data.message;
//   }
// };


// export const getDoctorsReview = async () => {
//   try {
//     const token = localStorage.getItem("token");
//    let config = {
//      method: "get",
//      maxBodyLength: Infinity,
//      url: "http://13.200.83.188/v1/doctor-reviews",
//      headers: {
//        Authorization: `Bearer ${token}`,
//      },
//      params: {
//        $populate: ["user"],
//      },
//    };

//     const response = await axios.request(config);
//     return response.data;
//   } catch (error) {
//     return error.response.data.message;
//   }
// };

// export const getAllReview = async () => {
//   try {
//     const token = localStorage.getItem("token");
//    let config = {
//      method: "get",
//      maxBodyLength: Infinity,
//      url: "http://13.200.83.188/v1/review?$populate=patient&$populate=doctor",
//      headers: {
//        Authorization: `Bearer ${token}`,
//      },
//      params: {
//        $populate: ["user"],
//      },
//    };

//     const response = await axios.request(config);
//     return response.data;
//   } catch (error) {
//     return error.response.data.message;
//   }
// };
