import React, { use, useEffect } from "react";
import { AuthContext } from "./AuthContext";

import Loading from "../components/Loading/Loading";
import { useLocation, useNavigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, loading } = use(AuthContext);

  useEffect(() => {
    if (!loading && !user && location.pathname !== "/") {
      navigate("/signin", { state: { from: location.pathname } });
    }
  }, [loading, user, navigate, location.pathname]);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }
};

export default PrivateRoute;
