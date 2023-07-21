import axios from "axios";

const API_URL = "https://api.knowcancer.braynixai.com";

export const getPateintsReview = async () => {
  try {
    const token = localStorage.getItem("token");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API_URL}/v1/patient-reviews?$limit-1`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        $populate: ["user"],
      },
    };
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const getDoctorsReview = async () => {
  console.log("getDoctorRerviews api called");
  try {
    const token = localStorage.getItem("token");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API_URL}/v1/doctor-reviews?$limit-1`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        $populate: ["user"],
      },
    };

    const response = await axios.request(config);
    console.log("getDoctorRerviews api called", response);

    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const getAllReview = async () => {
  try {
    const token = localStorage.getItem("token");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API_URL}/v1/review?$populate=patient&$populate=doctor&$limit=-1`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.request(config);
    console.log("getDoctorRerviews api called", response);
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
};
