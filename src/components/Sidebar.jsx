import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { BsArrowRightCircle } from "react-icons/bs";
import { MdPostAdd } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { CgLogIn } from "react-icons/cg";
import { GoHome } from "react-icons/go";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  if (user)
    return (
      <div>
        {!isOpen ? (
          <nav className="top-0 left-0 fixed bg-gradient-to-r from-blue-800 to-sky-700 w-full md:w-24 h-16 md:h-full p-2 shadow-2xl">
            <div className="flex md:flex-col">
              <button
                className="fixed left-16 top-6 text-white cursor-pointer invisible md:visible"
                onClick={() => setIsOpen(!isOpen)}
              >
                <BsArrowRightCircle className="w-6 h-6" />
              </button>
              <div className="flex md:flex-col items-center md:my-32">
                {user && (
                  <div className="flex flex-col gap-4 items-center">
                    <span className="flex justify-center w-12 h-12 text-3xl py-1 text-sky-700 font-semibold rounded-3xl bg-white">
                      {user.username.substring(0, 1).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
              {user && (
                <div className="flex items-center mx-auto">
                  <ul className="flex md:flex-col gap-12 list-none">
                    <li>
                      <NavLink
                        className="flex hover:opacity-75 border-0 hover:border-0 text-white"
                        to="/"
                      >
                        <span className="mx-auto" title="Posts">
                          <GoHome className="w-6 h-6 mb-2" />
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="flex hover:opacity-75 border-0 hover:border-0 text-white"
                        to="/newPost"
                      >
                        <span className="mx-auto" title="New Post">
                          <MdPostAdd className="w-6 h-6 mb-2" />
                        </span>
                      </NavLink>
                    </li>

                    <li>
                      {user && (
                        <button
                          className="mx-auto text-white hover:opacity-75"
                          onClick={logout}
                          title="Logout"
                        >
                          <RiLogoutBoxRLine className="w-6 h-6" />
                        </button>
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
        ) : (
          <nav className="top-0 left-0 fixed bg-gradient-to-r from-blue-800 to-sky-700 w-64 h-full">
            <div className="flex flex-col items-center">
              <div>
                <button
                  className="fixed left-52 top-6 cursor-pointer text-white p-3"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <CgCloseO className="w-7 h-7 text-white" />
                </button>

                <div className="flex flex-col my-32 gap-8">
                  <h4 className="text-2xl text-white font-semibold flex justify-center">
                    {user?.username}
                  </h4>
                </div>
              </div>
              {user ? (
                <div>
                  <ul className="flex flex-col gap-8 list-none lg:ml-auto">
                    <li className="nav-item">
                      <NavLink
                        className="px-6 py-2 flex text-xs uppercase font-bold leading-snug text-white hover:opacity-75 border-0 hover:border-0"
                        to="/"
                      >
                        <span className="ml-2 flex items-center gap-4">
                          Home <GoHome className="w-6 h-6" />
                        </span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="px-6 py-2 flex text-xs uppercase font-bold leading-snug text-white hover:opacity-75 border-0 hover:border-0"
                        to="/newPost"
                      >
                        <span className="ml-2 flex items-center gap-4">
                          New Post
                          <MdPostAdd className="w-6 h-6" />
                        </span>
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      {user && (
                        <button
                          className="flex px-8 text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                          onClick={logout}
                        >
                          <div className="flex items-center gap-4">
                            <span>Cerrar Sesión</span>
                            <RiLogoutBoxRLine className="w-6 h-6" />
                          </div>
                        </button>
                      )}
                    </li>
                  </ul>
                </div>
              ) : (
                <div>
                  <ul className="flex flex-col gap-12 list-none">
                    <li className="nav-item">
                      <NavLink
                        className="flex text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        to="/login"
                      >
                        <span className="ml-6" title="Login">
                          Login <CgLogIn className="w-6 h-6 mx-2" />
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    );
}
