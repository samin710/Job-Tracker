import React, { use, useEffect } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaIndustry, FaLocationDot } from "react-icons/fa6";
import JobsCard from "../JobsCard/JobsCard";
import { AuthContext } from "../../Provider/AuthContext";
import Loading from "../Loading/Loading";

const ComDetailsCard = ({ com }) => {
  const { name, logo, location, website, industry, jobs } = com || {};
  const { loading } = use(AuthContext);
  useEffect(() => {
    document.title = `JobTracker | ${name}`;
  }, [name]);

  if (loading) return <Loading></Loading>;

  return (
    <div className="">
      <div className="flex gap-2 md:gap-3 justify-center items-center lg:pb-12 md:pb-10 pb-6 ">
        <div className="lg:w-35 md:w-20 w-15">
          <img className="w-full" src={logo} alt="" />
        </div>
        <p className="md:text-4xl text-2xl lg:text-5xl font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-[2]">
          {name}
        </p>
      </div>
      <div className="flex justify-center">
        {" "}
        <div
          className="lg:p-16 p-10 rounded-l-full rounded-r-full lg:w-1/2 "
          style={{ boxShadow: "10px -10px 20px rgba(138, 43, 226, 0.4)" }}
        >
          <p className="font-semibold lg:text-3xl md:text-2xl text-lg flex items-center gap-1 ">
            <FaLocationDot />
            Location: <span className="text-accent">{location}</span>
          </p>
          <p className="font-semibold lg:text-3xl md:text-2xl text-lg py-5 flex items-center gap-1">
            <FaIndustry />
            Industry: <span className="text-accent">{industry}</span>
          </p>
          <p className="font-semibold lg:text-3xl md:text-2xl text-lg flex items-center gap-1">
            <CgWebsite />
            Website:{" "}
            <a href={website} target="_blank" className="text-blue-600">
              {website}
            </a>
          </p>
        </div>
      </div>
      <div className="lg:pt-20 md:pt-16 pt-10">
        <h1 className="text-center text-4xl font-medium">
          Available Jobs: <span className="text-primary">{jobs.length}</span>
        </h1>
        <div className="flex flex-col gap-4 items-center lg:mt-10 mt-5 md:mt-8 ">
          {" "}
          {jobs.map((job) => (
            <JobsCard key={job.id} website={website} job={job}></JobsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComDetailsCard;
