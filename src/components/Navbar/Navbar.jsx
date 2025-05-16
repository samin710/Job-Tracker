import React, { use } from "react";
import navLogo from "../../assets/logo.jpg";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

const Navbar = () => {
  const { user, logout, loading } = use(AuthContext);
  const navigate = useNavigate();

  if (loading) return <Loading></Loading>;

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Successfully SignOut");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };

  return (
    <>
      <div className="navbar p-0 mx-auto px-5 md:px-12 lg:px-20 py-1 md:py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="hover:cursor-pointer md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3 lg:mr-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            {/* choto */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/faq"}>FAQ</NavLink>
              </li>
              <li>
                <NavLink to={"/profileDetails"}>Profile Details</NavLink>
              </li>
              {user ? (
                <div className="p-2">
                  <button onClick={handleLogout}>SignOut</button>
                </div>
              ) : (
                <div className="">
                  <li>
                    <NavLink to={"/signin"}>SignIn</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/signup"}>SignUp</NavLink>
                  </li>
                </div>
              )}
            </ul>
          </div>
          <div className="flex justify-center  items-center  gap-2">
            <img
              className=" w-8 md:w-15 text-primary p-1 border-4 rounded-full mx-auto"
              src={navLogo}
              alt=""
            />
            <p className="text-xl md:text-3xl font-bold">
              Job
              <span className=" bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Tracker
              </span>
            </p>
          </div>
        </div>
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-2 border-primary bg-primary text-white font-medium btn"
                    : "border-2 border-primary text-primary font-medium btn"
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-2 border-primary bg-primary text-white font-medium btn"
                    : "border-2 border-primary text-primary font-medium btn"
                }
                to={"/faq"}
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-2 border-primary bg-primary text-white font-medium btn"
                    : "border-2 border-primary text-primary font-medium btn"
                }
                to={"/profileDetails"}
              >
                Profile Details
              </NavLink>
            </li>
            {user ? (
              <div className="menu-horizontal gap-3">
                <button
                  onClick={handleLogout}
                  className="border-2 border-primary text-primary font-medium btn"
                >
                  SignOut
                </button>
                <NavLink to={"/profileDetails"}>
                  <img className="w-10 rounded-full " src={user.photoURL}></img>
                </NavLink>
              </div>
            ) : (
              <div className=" menu-horizontal gap-3">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "border-2 border-primary bg-primary text-white font-medium btn"
                        : "border-2 border-primary text-primary font-medium btn"
                    }
                    to={"/signin"}
                  >
                    SignIn
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "border-2 border-primary bg-primary text-white font-medium btn"
                        : "border-2 border-primary text-primary font-medium btn"
                    }
                    to={"/signup"}
                  >
                    SignUp
                  </NavLink>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
