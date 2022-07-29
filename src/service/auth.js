import axios from "axios";

export const loginService = async (credentials) => {
  try {
    const res = await axios.post(
      "https://app-server-arielstereo.vercel.app/api/auth/login",
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
      "https://app-server-arielstereo.vercel.app/api/auth/register",
      user
    );
    return res.data;
  } catch (e) {
    return e.response.data;
  }
};
