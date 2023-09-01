import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserContainer = () => {
  const {user, logout} = useContext(UserContext)
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello, {user?.name}</p>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p> Please login </p>
      )}
    </div>
  );
};

export default UserContainer;
