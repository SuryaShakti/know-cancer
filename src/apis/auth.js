import axios from "axios";

const API_URL = "http://13.200.83.188/v1";

export const loginHandler = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/authenticate`, {
      strategy: "local",
      email,
      password,
      deviceType: 1,
      deviceId: '11 '
    });
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
};
