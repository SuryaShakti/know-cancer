import axios from "axios";

const API_URL = "https://api.knowcancer.braynixai.com";

export const getAllVideos = async () => {
  try {
    const token = localStorage.getItem("token");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API_URL}/v1/video-management`,
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

export const addNewVideo = async (tagLine, link, intent) => {
  try {
    const token = localStorage.getItem("token");

    let data = JSON.stringify({
      tagLine: tagLine,
      link: link,
      intent: intent,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${API_URL}/v1/video-management`,
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
