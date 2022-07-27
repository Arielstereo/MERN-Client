import { useAuth } from "./../context/AuthContext";
import { Link } from "react-router-dom";
import "./LoginForm.css";

export const LoginForm = () => {
  const { email, password, setEmail, setPassword, login, loginError } =
    useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login();
  };

  return (
    <>
      <div className="flex w-full login_img_section items-center">
        <div className="w-full mx-auto px-20 flex items-center justify-center gap-32">
          <div>
            <h1 className="text-slate-800 font-bold text-6xl font-sans">
              Posts App
            </h1>
            <p className="text-slate-700 mt-4">The simplest app to posts!</p>
            <div className="flex flex-col mt-4 text-slate-100">
              <span>Log in to access the app</span>
              <span>You are not registered?</span>
            </div>
            <div className="flex justify-center lg:justify-start mt-2">
              <Link
                to="/register"
                className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
              >
                Register
              </Link>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-2/3">
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-r from-slate-300 to-slate-200 p-10 rounded-lg shadow-2xl w-full"
            >
              <h1 className="text-center text-2xl mb-6 text-gray-800 font-bold font-sans">
                Login
              </h1>
              <div>
                <label className="text-gray-800 font-semibold block my-3 text-md">
                  Email
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-xl rounded-l-md bg-gray-600 text-gray-100 border border-r-0 border-gray-300">
                    @
                  </span>
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-800 font-semibold block my-3 text-md">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full my-6 bg-blue-800 rounded-lg hover:bg-blue-600 px-4 py-2 text-lg text-white font-semibold font-sans"
              >
                Sign In
              </button>

              <span className="text-red-600 font-bold flex justify-center">
                {loginError}
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
