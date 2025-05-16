import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import Loading from "../Loading/Loading";

const CompanyLogo = ({ com }) => {
  const { id, logo } = com || {};
  const { loading } = use(AuthContext);
  if (loading) return <Loading></Loading>;
  return (
    <NavLink to={`companyDetails/${id}`}>
      <img
        className="shadow-2xl rounded-2xl w-full h-5/5 hover:border-3 hover:border-primary"
        key={id}
        src={logo}
      ></img>
    </NavLink>
  );
};

export default CompanyLogo;
