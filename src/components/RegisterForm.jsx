import { useAuth } from "./../context/AuthContext";
import { Link } from "react-router-dom";
import "./RegisterForm.css";

export const RegisterForm = () => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    username,
    setUsername,
    register,
    passwordConfirmation,
    setPasswordConfirmation,
    registerError,
  } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username,
      email,
      password,
      passwordConfirmation,
    };
    register(newUser);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row md:gap-6 lg:gap-24">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-slate-800 to-slate-600 p-6 rounded-lg shadow-2xl w-full md:w-96 md:p-12"
      >
        <h1 className="text-center text-3xl mb-6 text-slate-100 font-bold border-b-2 border-slate-400 pb-2">
          Register
        </h1>
        <div>
          <label className="text-slate-100 font-semibold block my-3 text-md">
            Username
          </label>

          <input
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
            type="text"
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div>
          <label className="text-slate-100 font-semibold block my-3 text-md">
            Email
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-xl rounded-l-md bg-gray-400 text-gray-800 border border-gray-300">
              @
            </span>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-r-lg focus:outline-none"
              type="text"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
            />
          </div>
        </div>

        <div>
          <label className="text-slate-100 font-semibold block my-3 text-md">
            Password
          </label>
          <input
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
            type="text"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </div>
        <div>
          <label className="text-slate-100 font-semibold block my-3 text-md">
            Confirm password
          </label>
          <input
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
            type="text"
            value={passwordConfirmation}
            name="passwordConfirmation"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder="confirm password"
          />
        </div>
        <button
          type="submit"
          className="w-full my-6 bg-blue-400 rounded-lg hover:bg-blue-300 px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
        >
          Sign Up
        </button>
        <span className="flex justify-center text-yellow-500 font-bold mx-auto  px-6">
          {registerError}
        </span>
      </form>

      <div className="text-center flex flex-col justify-center items-center my-2">
        <h1 className="text-white font-bold text-6xl font-sans">Posts App</h1>
        <p className="text-white mt-3">The simplest app to posts!</p>
        <div className="flex flex-col mt-4 text-slate-800">
          <span>Register to enter the app</span>
          <span>Are you already registered?</span>
        </div>
        <div className="flex justify-center lg:justify-start mt-2">
          <Link
            to="/login"
            className="bg-blue-800 hover:bg-slate-100 hover:text-blue-800 text-slate-100 mt-4 px-4 py-2 rounded-2xl hover:font-bold mb-2"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
