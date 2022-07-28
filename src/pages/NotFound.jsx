import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center mt-48  md:ml-48 lg:ml-auto gap-6">
      <span className="text-8xl">404</span>
      <h1 className="text-4xl md:text-6xl">Not Found Page!</h1>
      <Link to="/" className="bg-blue-400 hover:bg-blue-500 py-4 px-8 rounded-2xl text-white text-xl font-semibold">
        Back to Home!
      </Link>
    </div>
  );
};
