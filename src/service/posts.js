import axios from "axios";

export const getPostsReq = async ({ token }) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  return await axios.get(
    "api/posts/getPosts",
    config
  );
};
export const createPostsReq = async (post, { token }) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  return await axios.post(
    "api/posts/create",
    post,
    config
  );
};

export const deletePostsReq = async (id, { token }) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  return axios.delete(
    "/api/posts/delete/" + id,
    config
  );
};

export const getPostReq = async (id, { token }) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  return await axios.get(
    "/api/posts/get/" + id,
    config
  );
};

export const updatePostReq = async (id, post, { token }) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  return await axios.put(
    "/api/posts/update/" + id,
    post,
    config
  );
};
