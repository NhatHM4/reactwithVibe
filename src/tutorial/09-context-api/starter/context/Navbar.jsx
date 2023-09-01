import NavLinks from "./NavLinks";
import { useState, createContext, useContext } from "react";
import UserContextProvider from "./UserContext";

// export const UserContext = createContext();
// export const UseAppContext = ()=> useContext(UserContext)

const Navbar = () => {
  return (
    <UserContextProvider>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </UserContextProvider>
  );
};

export default Navbar;
