import React, { use, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import Loading from "../Loading/Loading";

const JobsCard = ({ job, website }) => {
  const {
    title,
    jobType,
    salary,
    bannerImage,
    location,
    description,
    requirements,
  } = job || {};

  const modalRef = useRef(null);

  const { user, loading } = use(AuthContext);
  const navigate = useNavigate();
  const rlocation = useLocation();

  const handleModal = () => {
    if (user) {
      modalRef.current?.showModal();
    } else {
      navigate("/signin", { state: { from: rlocation.pathname } });
    }
  };

  if (loading) return <Loading></Loading>;

  return (
    <div
      className="card bg-base-100 md:w-5/7 w-full"
      style={{ boxShadow: "10px -10px 20px rgba(138, 43, 226, 0.4)" }}
    >
      <div className="card-body">
        <h2 className="card-title md:text-2xl text-xl">
          Position: <span className="text-primary">{title}</span>
        </h2>
        <p className="md:text-xl text-lg">Job type: {jobType}</p>
        <p className="md:text-xl text-lg">Salary range: {salary}</p>
        <div className="card-actions justify-center pt-10 md:pt-16 lg:pt-20">
          <button
            onClick={handleModal}
            className="relative px-5 py-3 overflow-hidden font-medium text-primary  border border-primary rounded-l-full rounded-r-full shadow-inner group md:text-lg cursor-pointer w-3/5"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-secondary group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-secondary group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-100 bg-secondary group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-100 bg-secondary  group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-primary opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Details
            </span>
          </button>

          <dialog className="modal" ref={modalRef}>
            <div
              className="bg-cover bg-center text-white w-3/5 lg:p-9 rounded-2xl  p-4 "
              style={{
                backgroundImage: `url(${bannerImage})`,
                backgroundColor: "rgba(0,0,0,0.7)",
                backgroundBlendMode: "overlay",
              }}
            >
              <h3 className="font-bold text-xl md:text-2xl lg:text-3xl pb-1 md:pb-3">
                Position: {title}
              </h3>
              <div className="md:text-lg text-sm">
                {" "}
                <p className="">Job type: {jobType}</p>
                <p className="py-1">Location: {location}</p>
                <p>Salary: {salary}</p>
                <p className="py-1">Job description: {description}</p>
                <p>
                  <b>Requirements:</b>{" "}
                  {requirements.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </p>
              </div>
              <div className="flex justify-between md:mt-3 mt-2">
                <a
                  href={website}
                  target="_blank"
                  className="relative inline-flex items-center lg:px-10 lg:py-2 px-5 py-1 md:px-8 md:py-2 overflow-hidden text-lg font-medium text-white border-2 border-white rounded-full hover:text-black group hover:border-black "
                >
                  <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative">Apply</span>
                </a>
                <form method="dialog">
                  <button className="relative inline-flex items-center lg:px-10 lg:py-2 px-5 py-1 md:px-8 md:py-2 overflow-hidden text-lg font-medium text-white border-2 border-white rounded-full hover:text-black group hover:border-black ">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="relative">Close</span>
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
