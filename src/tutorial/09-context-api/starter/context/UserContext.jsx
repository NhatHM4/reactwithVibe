import { createContext, useState } from "react";
export const UserContext = createContext();

const UserContextProvider = ({ children  }) => {
  const [user, setUser] = useState({ name: "nhathm" });
  const logout = () => {
    setUser(null);
  };
  return (
    <UserContext.Provider value={{ user: user, logout: logout }}>
      {children }
    </UserContext.Provider>
  );
};

export default UserContextProvider;
