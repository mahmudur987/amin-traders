import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

import app from "../firebase/Firebase.config";

const auth = getAuth(app);
// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext([]);

// eslint-disable-next-line react/prop-types
const UserContext = ({ children }) => {
  const [theme, SetTheme] = useState(true);
  const [user, Setuser] = useState(null);
  const [loading, Setloading] = useState(true);

  const signUp = (email, password) => {
    Setloading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (profile) => {
    Setloading(true);

    return updateProfile(auth.currentUser, profile);
  };

  const login = (email, password) => {
    Setloading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogIn = (provider) => {
    Setloading(true);

    return signInWithPopup(auth, provider);
  };
  const passwordResset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      Setuser(currentUser);
      console.log(currentUser);
      Setloading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    theme,
    SetTheme,
    signUp,
    updateUserProfile,
    loading,
    Setloading,
    user,
    Setuser,
    login,
    googleLogIn,
    logout,
    passwordResset,
  };
  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
};

export default UserContext;
