import axios from "axios";

export const getPostsReq = async ({ token }) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  return await axios.get("http://localhost:4000/api/posts/getPosts", config);
};
export const createPostsReq = async (post, { token }) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  const form = new FormData();
  for (let key in post) {
    form.append(key, post[key]);
  }

  return await axios.post(
    "http://localhost:4000/api/posts/create",
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

  return axios.delete("http://localhost:4000/api/posts/delete/" + id, config);
};

export const getPostReq = async (id, { token }) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  return await axios.get("http://localhost:4000/api/posts/get/" + id, config);
};

export const updatePostReq = async (id, post, { token }) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  const form = new FormData();
  for (let key in post) {
    form.append(key, post[key]);
  }

  return await axios.put(
    "http://localhost:4000/api/posts/update/" + id,
    post,
    config,
    form
  );
};
