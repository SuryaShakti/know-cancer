import axios from "axios";

const API_URL = "https://api.knowcancer.braynixai.com";

export const getAllPateints = async (email, password) => {
  try {
    const token = localStorage.getItem("token");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API_URL}/v1/user-management?role=3&$populate[0][path]=userHealthRecord&$populate[0][populate]=diagnosis&$limit=-1`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.request(config);
    console.log("response getALL Patients", response);
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
};
