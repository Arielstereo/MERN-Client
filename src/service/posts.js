import axios from "axios";

export const getPostsReq = async ({ token }) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  return await axios.get("https://app-server-arielstereo.vercel.app/api/posts/getPosts", config);
};
export const createPostsReq = async (post, { token }) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin" : "*"
    },
  };
  const form = new FormData();
  for (let key in post) {
    form.append(key, post[key]);
  }

  return await axios.post(
    "https://app-server-arielstereo.vercel.app/api/posts/create",
    post,
    config,
    form
  );
};

export const deletePostsReq = async (id, { token }) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  return axios.delete("https://app-server-arielstereo.vercel.app/api/posts/delete/" + id, config);
};

export const getPostReq = async (id, { token }) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  return await axios.get("https://app-server-arielstereo.vercel.app/api/posts/get/" + id, config);
};

export const updatePostReq = async (id, post, { token }) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin" : "*"
    },
  };
  const form = new FormData();
  for (let key in post) {
    form.append(key, post[key]);
  }

  return await axios.put(
    "https://app-server-arielstereo.vercel.app/api/posts/update/" + id,
    post,
    config,
    form
  );
};
