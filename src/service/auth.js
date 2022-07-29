import axios from "axios";

export const loginService = async (credentials) => {
  const config = {
    headers: {
      origin: "https://app-front-arielstereo.vercel.app",
      methods: "GET, POST, PUT, DELETE, OPTIONS",
    },
    }
  try {
    const res = await axios.post(
      "https://app-server-arielstereo.vercel.app/api/auth/login",
      credentials,
      config
    );
    return res.data;
  } catch (e) {
    return e.response.data;
  }
};

export const registerService = async (user) => {
  const config = {
    headers: {
      origin: "https://app-front-arielstereo.vercel.app",
      methods: "GET, POST, PUT, DELETE, OPTIONS",
    },
    }
  try {
    const res = await axios.post(
      "https://app-server-arielstereo.vercel.app/api/auth/register",
      user,
      config
    );
    return res.data;
  } catch (e) {
    return e.response.data;
  }
};
