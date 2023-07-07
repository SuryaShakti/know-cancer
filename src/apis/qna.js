import axios from "axios";

const API_URL = "https://api.knowcancer.braynixai.com/v1";

export const getAllQuestions = async (email, password) => {
  try {
    const token = localStorage.getItem("token");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API_URL}/qna`,
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

export const addNewQa = async (question, answer, intent) => {
  try {
    const token = localStorage.getItem("token");

    let data = JSON.stringify({
      question: question,
      answer: answer,
      intent: intent,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${API_URL}/qna`,
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
