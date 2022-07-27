/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createPostsReq } from "./../service/posts";
import { useAuth } from "./../context/AuthContext";
import { ImSpinner3 } from "react-icons/im";
import { GoHome } from "react-icons/go";

export const PostForm = () => {
  const navigate = useNavigate();

  const { user } = useAuth();

  const { token } = user;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [newPost, setNewPost] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState("");

  const createPost = async (post, { token }) => {
    const res = await createPostsReq(post, { token });
    const errorMsg = res.data;
    if (errorMsg.length > 0) {
      setError(errorMsg);
      setIsSubmit(false);
    } else {
      navigate("/");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = {
      title,
      content,
      image,
    };

    setIsSubmit(true);
    const postSaved = await createPost(post, { token });
    setNewPost(postSaved);
  };

  return (
    <>
      <div className="right-32 top-10 fixed">
        <Link to={"/"} title="Go Home">
          <GoHome className="w-14 h-14 p-3 bg-blue-700 hover:bg-blue-500 rounded-full text-slate-100" />
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-gradient-to-r from-slate-200 to-slate-300 shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
      >
        <h3 className="flex justify-center text-slate-800 text-2xl font-bold font-mono py-4">
          New post to {user.username}
        </h3>
        <div className="flex gap-4 pt-6">
          <label className="text-slate-800 py-2 text-base">Title</label>
          <input
            type="text"
            placeholder="Title"
            className="mb-4 p-2 rounded-md"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="text-slate-800 py-2 text-base">Upload image</label>
          <input
            type="file"
            name="image"
            className="mb-4 p-2 rounded-md bg-slate-50 text-slate-500"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <label className="text-slate-800 py-2 text-base">Message</label>
        <textarea
          rows="6"
          placeholder="Leave a comment..."
          className="mb-4 p-2 rounded-md"
          name="content"
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          className="bg-blue-500 hover:bg-blue-800 disabled:bg-slate-500 text-white font-bold py-2 px-4 my-4 rounded"
          disabled={isSubmit}
        >
          {isSubmit ? (
            <div className="flex gap-6">
              <ImSpinner3 className="h-6 w-6 animate-spin" />
              <span>Loading...</span>
            </div>
          ) : (
            "Save"
          )}
        </button>
        <div className="mt-4 text-center text-red-500 text-base">{error}</div>
      </form>
    </>
  );
};
