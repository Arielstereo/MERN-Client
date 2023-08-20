import axios from "axios";

export const loginService = async (credentials) => {
  try {
    const res = await axios.post(
      "https://post-app-backend-a6mg.onrender.com/api/auth/login",
      credentials
    );
    return res.data;
  } catch (e) {
    return e.response.data;
  }
};

export const registerService = async (user) => {
  try {
    const res = await axios.post(
      "https://post-app-backend-a6mg.onrender.com/api/auth/register",
      user
    );
    return res.data;
  } catch (e) {
    return e.response.data;
  }
};
