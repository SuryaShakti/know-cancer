import axios from "axios";

const API_URL = "http://13.200.83.188:3030/v1";

export const getAllQuestions = async (email, password) => {
  try {
    const token = localStorage.getItem("token");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://13.200.83.188:3030/v1/qna",
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
