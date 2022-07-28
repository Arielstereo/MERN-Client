import { useNavigate } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";

export const PostCard = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div className="m-auto md:ml-64 lg:m-auto p-4" key={post._id}>
      <div className="w-full md:w-[500px] bg-slate-100 hover:bg-sky-100 rounded-lg border border-gray-200 shadow-2xl">
        <div>
          {post.image && (
            <img
              src={post.image.url}
              alt={post.title}
              className="rounded-lg"
            />
          )}
        </div>
        <div className="flex justify-between">
          <h3 className="m-2 text-2xl font-bold tracking-tight text-gray-900">
            {post.title}
          </h3>
          <h5 className="m-3 text-sky-600">{post.date?.substring(0, 21)}</h5>
        </div>

        <p className="m-3 w-full font-normal text-gray-500">{post.content}</p>

        <div className="flex justify-between mx-8 my-4">
          <span className="text-red-800">By {post.uid.username}</span>
          <button
            className="text-slate-800 cursor-pointer"
            onClick={() => navigate(`/post/${post._id}`)}
          >
            <AiFillEdit className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
