import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext([]);

// eslint-disable-next-line react/prop-types
const UserContext = ({ children }) => {
  //   const [user, Setuser] = useState(null);
  //   const [loading, Setloading] = useState(true);
  //   const [cart, SetCart] = useState({});
  const [theme, SetTheme] = useState(true);
  //   const [selectedDate, SetSelectedDate] = useState(new Date());

  //   const signUp = (email, password) => {
  //     Setloading(true);

  //     return createUserWithEmailAndPassword(auth, email, password);
  //   };
  //   const updateUserProfile = (profile) => {
  //     Setloading(true);

  //     return updateProfile(auth.currentUser, profile);
  //   };

  //   const login = (email, password) => {
  //     Setloading(true);

  //     return signInWithEmailAndPassword(auth, email, password);
  //   };

  //   const googleLogIn = (provider) => {
  //     Setloading(true);

  //     return signInWithPopup(auth, provider);
  //   };

  //   const logout = () => {
  //     return signOut(auth);
  //   };

  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //       Setuser(currentUser);
  //       Setloading(false);
  //     });
  //     return () => {
  //       unsubscribe();
  //     };
  //   }, []);

  const authInfo = {
    theme,
    SetTheme,
  };
  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
};

export default UserContext;
