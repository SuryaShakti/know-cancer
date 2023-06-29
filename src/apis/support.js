import axios from "axios";

const API_URL = "https://api.knowcancer.braynixai.com";

export const getAllSupport = async () => {
  try {
    const token = localStorage.getItem("token");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API_URL}/v1/support-ticket-management`,
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

export const resolveSupport = async (id) => {
  try {
    const token = localStorage.getItem("token");

    let data = JSON.stringify({
      status: 2,
    });

    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${API_URL}/v1/support-ticket-management/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    const response = await axios.request(config);

    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
};
