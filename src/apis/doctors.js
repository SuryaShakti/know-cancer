import axios from "axios";

const API_URL = "https://api.knowcancer.braynixai.com";

export const getAllDoctors = async (email, password) => {
  try {
    const token = localStorage.getItem("token");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API_URL}/v1/doctor-details?$populate=createdBy&$limit=-1`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.request(config);

    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const approveDoctor = async (id) => {
  try {
    const token = localStorage.getItem("token");
    let data = JSON.stringify({
      status: 2,
    });

    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${API_URL}/v1/doctor-details/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    const response = await axios.request(config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
export const rejectDoctor = async (id) => {
  try {
    const token = localStorage.getItem("token");

    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${API_URL}/v1/doctor-details/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.request(config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
