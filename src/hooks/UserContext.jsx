import { useContext, createContext, useState, useEffect } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const userData = localStorage.getItem("devburguer:userData");

    if (userData) {
      setUserInfo(JSON.parse(userData));
    }
  }, []);

  const logout = () => {
    setUserInfo({});
    localStorage.removeItem("devburguer:userData");
  };

  const putUserData = (userInfo) => {
    setUserInfo(userInfo);

    localStorage.setItem("devburguer:userData", JSON.stringify(userInfo));
  };

  return (
    <UserContext.Provider value={{ userInfo, putUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser tem que ser um contexto válido");
  }

  return context;
};
