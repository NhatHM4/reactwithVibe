import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user ? (
        <button
          onClick={() => {
            setUser("Ronaldo");
          }}
        >
          Login
        </button>
      ) : (
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          Logout
        </button>
      )}
      <h4>{user ? `hello there ${user}` : "please login"}</h4>
    </div>
  );
};

export default UserChallenge;
