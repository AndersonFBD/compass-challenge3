import { createContext, useState, useEffect } from "react";

const UserContext = createContext({});

const storage = Object.keys(window.sessionStorage).filter((item) =>
  item.startsWith("firebase:authUser")
)[0];

const getInitialState = () => {
  const currentUser = sessionStorage.getItem(storage);
  return currentUser ? JSON.parse(currentUser) : null;
};

type UserProviderProps = {
  children: React.ReactNode;
};

const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState(getInitialState);
  useEffect(() => {
    sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  const login = async (user: object) => {
    setCurrentUser(user);
  };

  const logout = async () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
