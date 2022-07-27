import axios from "axios";

export const loginService = async (credentials) => {
  try {
    const res = await axios.post(
      "http://localhost:4000/api/auth/login",
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
      "http://localhost:4000/api/auth/register",
      user
    );
    return res.data;
  } catch (e) {
    return e.response.data;
  }
};
