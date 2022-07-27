import { useContext, createContext, useState } from "react";

const PostContext = createContext();

export const usePost = () => {
  return useContext(PostContext);
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
        post,
        setPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
