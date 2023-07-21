import axios from "axios";

const API_URL = "https://api.knowcancer.braynixai.com/v1";

export const getAllQuestions = async () => {
  console.log("api called");

  try {
    const token = localStorage.getItem("token");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API_URL}/qna?$limit=-1`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.request(config);
    console.log("response", response);

    return response.data;
  } catch (error) {
    console.log(error);
    return error.response.data.message;
  }
};

export const addNewQa = async (question, answer, intent, preference, link) => {
  try {
    const token = localStorage.getItem("token");

    let data = JSON.stringify({
      question: question,
      answer: answer,
      intent: intent,
      preference: preference,
      link: link,
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
    throw error.response.data.message;
  }
};

export const approveQa = async (id) => {
  console.log("api called approve Qa", id);
  try {
    const token = localStorage.getItem("token");

    let data = JSON.stringify({
      status: 2,
    });

    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${API_URL}/qna/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    const response = await axios.request(config);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response.data.message;
  }
};

export const rejectQa = async (id) => {
  console.log("api called Reject Qa", id);
  try {
    const token = localStorage.getItem("token");

    let data = JSON.stringify({
      status: 3,
    });

    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${API_URL}/qna/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    const response = await axios.request(config);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response.data.message;
  }
};

export const deleteQa = async (id) => {
  try {
    const token = localStorage.getItem("token");
    let data = JSON.stringify({
      status: -1,
    });

    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${API_URL}/qna/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    const response = await axios.request(config);
    console.log(response, "delete response");
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const editQuestion = async (
  question,
  answer,
  intent,
  preference,
  link,
  id
) => {
  try {
    const token = localStorage.getItem("token");
    let data = JSON.stringify({
      question: question,
      answer: answer,
      intent: intent,
      preference: preference,
      link: link,
    });

    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${API_URL}/qna/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    const response = await axios.request(config);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response.data.message;
  }
};
