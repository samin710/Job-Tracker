import React, { use, useEffect } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Loading from "../components/Loading/Loading";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const ProfileDetails = () => {
  const { user, loading } = use(AuthContext);

  useEffect(() => {
    document.title = "JobTracker | Profile";
  }, []);

  if (loading) return <Loading></Loading>;
  return (
    <div className="hero min-h-screen">
      <div
        className="hero-content flex-col lg:flex-row rounded-full md:py-55 md:px-40 p-16"
        style={{ boxShadow: "0 0 80px rgba(138, 43, 226, 0.8)" }}
      >
        <img src={user.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{user.displayName}</h1>
          <p className="pb-6 pt-2 text-accent md:text-xl text-lg">
            {user.email}.
          </p>
          <div className="flex justify-between">
            {" "}
            <FaGithub size={35} />
            <FaInstagram size={35} />
            <FaLinkedin size={35} />
            <FaTwitter size={35} />
          </div>
          <div className="flex justify-center pt-10">
            <Link
              to={"/updateProfile"}
              className="relative inline-block md:text-lg group"
            >
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
                <span className="relative">Update</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
