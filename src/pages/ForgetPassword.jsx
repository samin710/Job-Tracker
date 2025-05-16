import React, { use, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  useEffect(() => {
    document.title = "Reset Password";
  }, []);

  const { reset } = use(AuthContext);
  const location = useLocation();
  const emailFromSignIn = location.state.email || "";
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();

    const email = emailFromSignIn || e.target.email.value;

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    reset(email)
      .then(() => {
        toast.success("Reset email is sent");
        navigate("/signin", { replace: true });
        window.open("https://mail.google.com/", "_blank");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleResetPassword}
        className="bg-white shadow-lg shadow-primary p-6 rounded w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full mb-4"
          defaultValue={emailFromSignIn}
        />
        <button type="submit" className="btn btn-primary w-full">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
