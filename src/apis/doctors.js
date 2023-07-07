import axios from "axios";

const API_URL = "https://api.knowcancer.braynixai.com";

export const getAllDoctors = async (email, password) => {
  try {
    const token = localStorage.getItem("token");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API_URL}/v1/doctor-details?$populate=createdBy`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.request(config);

    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
};
