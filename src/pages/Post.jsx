import { getPostReq, deletePostsReq, updatePostReq } from "./../service/posts";
import { useAuth } from "./../context/AuthContext";
import { usePost } from "../context/PostContext";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { ImSpinner3, ImSpinner } from "react-icons/im";
import { GoHome } from "react-icons/go";

export const Post = () => {
  const { user } = useAuth();
  const { token, id } = user;

  const { posts, setPosts, post, setPost } = usePost();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const date = Date();

  const [isSubmit, setIsSubmit] = useState(false);
  const [isSubmitDelete, setIsSubmitDelete] = useState(false);

  const params = useParams();
  const postId = params.id;

  const [hidden, setHidden] = useState(true);
  const [error, setError] = useState("");

  const isVisible = hidden ? "invisible" : "";

  const getPost = async (postId, { token }) => {
    const res = await getPostReq(postId, { token });
    const { post } = res.data;
    console.log(post);
    console.log(post.uid);
    if (id === post.uid) {
      setPost(post);
    } else {
      navigate("/");
    }
  };

  const deletePost = async (id, { token }) => {
    await deletePostsReq(id, { token });
    setPosts(posts.filter((post) => post._id !== id));
    navigate("/");
  };

  const updatePost = async (postId, values, { token }) => {
    const res = await updatePostReq(postId, values, { token });
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
    const values = {
      title,
      content,
      image,
      date,
    };
    setIsSubmit(true);
    await updatePost(postId, values, { token });
  };

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div className="p-4 gap-3">
          <p className="p-3 text-lg font-semibold text-slate-800 text-center">
            Delete post?
          </p>
          <div className="flex gap-6">
            <button
              className="bg-red-500 p-2 text-white rounded-md"
              onClick={() => {
                setIsSubmitDelete(true);
                deletePost(id, { token });
                toast.dismiss(t.id);
              }}
            >
              Delete
            </button>
            <button
              className="bg-slate-500 p-2 text-white rounded-md"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        style: {
          background: "#ffff",
        },
      }
    );
  };

  useEffect(() => {
    getPost(postId, { token });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isSubmitDelete)
    return (
      <div>
        <div className="right-32 top-10 fixed">
          <Link to={"/"} title="Go Home">
            <GoHome className="w-14 h-14 p-3 bg-blue-700 hover:bg-blue-500 rounded-full text-slate-100" />
          </Link>
        </div>
        <div
          className="flex justify-center items-center gap-20 mt-12 ml-32"
          key={post._id}
        >
          <div className="w-96 h-full shadow-2xl">
            <div className="p-12 bg-sky-200 hover:bg-sky-300">
              <div className="flex justify-end gap-12 pb-4 border-b-2 border-black">
                <button
                  onClick={() => handleDelete(post._id)}
                  className="hover:text-white"
                  title="Delete"
                >
                  <span className="flex gap-1">
                    delete
                    <AiFillDelete className="w-6 h-6" />
                  </span>
                </button>
                <button
                  onClick={() => setHidden(false)}
                  className="hover:text-white"
                  title="Edit"
                >
                  <span className="flex gap-1">
                    edit
                    <AiFillEdit className="w-6 h-6" />
                  </span>
                </button>
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-xl m-2">{post.title}</div>
                <div>
                  {post.image && (
                    <img
                      src={post.image.url}
                      alt={post.title}
                      className="w-96 mx-auto py-3"
                    />
                  )}
                </div>
              </div>
              <p className="text-gray-700 text-base">{post.content}</p>
            </div>
          </div>
          <div className={isVisible}>
            <button onClick={() => setHidden(true)} className="ml-80">
              <p className="flex cursor-pointer">
                close <GrFormClose className="w-5 h-5 mt-1" />
              </p>
            </button>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col bg-gradient-to-r from-slate-200 to-slate-300 shadow-lg rounded-xl p-10 mb-32 border-2 border-solid border-white"
            >
              <h3 className="flex justify-center text-slate-800 font-bold font-mono text-2xl pb-8">
                Edit Post
              </h3>
              <label className="text-base text-slate-800">Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="New title"
                className="mb-4 p-2 rounded-md"
              />

              <label className="text-base text-slate-800">Message</label>

              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                type="text"
                placeholder="New message"
                className="mb-4 p-2 rounded-md"
                rows="6"
              />

              <label className="text-slate-800 text-base">Upload image</label>
              <input
                type="file"
                name="image"
                className="mb-4 p-2 rounded-md bg-slate-50"
                onChange={(e) => setImage(e.target.files[0])}
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
              <div>
                <p className="text-red-500">{error}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  return (
    <div className="flex flex-col gap-12 justify-center items-center my-48">
      <ImSpinner className="h-32 w-24 animate-spin text-blue-500" />
      <span className="text-blue-500 text-2xl font-semibold animate-pulse">
        Removing ...
      </span>
    </div>
  );
};
