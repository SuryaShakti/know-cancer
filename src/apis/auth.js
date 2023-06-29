import axios from "axios";

const API_URL = "https://api.knowcancer.braynixai.com";

export const loginHandler = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/v1/authenticate`, {
      strategy: "local",
      email,
      password,
      deviceType: 1,
      deviceId: "11 ",
    });
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
};
