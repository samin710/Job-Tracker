import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const createUsers = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const update = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  const logout = () => {
    return signOut(auth);
  };

  const reset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authData = {
    user,
    setUser,
    createUsers,
    signin,
    googleSignIn,
    update,
    logout,
    loading,
    setLoading,
    reset,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
