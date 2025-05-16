import React, { use, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaUserEdit } from "react-icons/fa";

const UpdateProfile = () => {
  const { update } = use(AuthContext);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    update({ displayName: name, photoURL: photo })
      .then(() => {
        toast.success("Profile updated successfully!");
        navigate("/profileDetails");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-xl rounded-2xl">
        <div className="flex items-center justify-center text-3xl text-primary gap-2">
          <FaUserEdit /> <span>Update Profile</span>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">Photo URL</label>
            <input
              type="url"
              placeholder="Your photo URL"
              className="input input-bordered"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full rounded-full shadow-md"
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
