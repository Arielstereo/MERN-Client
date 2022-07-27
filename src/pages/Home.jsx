import { usePost } from "./../context/PostContext";
import { Link } from "react-router-dom";
import { PostCard } from "../components/PostCard";
import { useAuth } from "./../context/AuthContext";
import { getPostsReq } from "./../service/posts";
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";

export const Home = () => {
  const { posts, setPosts } = usePost();
  const { user } = useAuth();
  const { token } = user;

  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState("");
  const [cards, setCards] = useState([]);

  const getPosts = async ({ token }) => {
    const res = await getPostsReq({ token });
    setPosts(res.data);
    setCards(res.data);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    searchPost(e.target.value);
  };

  const searchPost = (word) => {
    // eslint-disable-next-line array-callback-return
    const res = cards.filter((element) => {
      if (
        element.title.toString().toLowerCase().includes(word.toLowerCase()) ||
        element.uid.username
          .toString()
          .toLowerCase()
          .includes(word.toLowerCase())
      ) {
        return element;
      }
    });
    setPosts(res);
  };

  useEffect(() => {
    getPosts({ token });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (posts.length === 0)
    return (
      <div className="flex flex-col justify-center gap-6 items-center mt-12">
        <h2 className="text-5xl font-bold">No Posts!</h2>
        <div className="flex items-center">
          <Link
            to="/newPost"
            className="text-xl text-white p-3 rounded-full bg-blue-700 hover:bg-sky-600  top-10 right-72 fixed"
            title="New Post"
          >
            <IoMdAdd className="w-8 h-8" />
          </Link>
        </div>
      </div>
    );

  return (
    <div>
      <div className="flex justify-center pt-12">
        <div className="flex fixed left-72 top-10">
          <h2 className="text-2xl text-black py-2 font-bold">Posts</h2>
          <span className="rounded-full bg-blue-700 px-5 py-2 mx-4 text-2xl text-white">
            {posts.length}
          </span>
        </div>
        <form className="flex items-center fixed right-12 top-12">
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-500 text-gray-900  text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="Search title or user"
              required
            />
          </div>
        </form>
        <div className="flex items-center">
          <Link
            to="/newPost"
            className="text-xl text-white p-3 rounded-full bg-blue-700 bottom-28 right-48 fixed"
            title="New Post"
          >
            <IoMdAdd className="w-8 h-8 text-white" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center">
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};
