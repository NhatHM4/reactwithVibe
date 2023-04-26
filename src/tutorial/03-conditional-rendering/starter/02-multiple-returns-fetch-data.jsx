import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fecthData();
  }, []);
  const fecthData = async () => {
    try {
      const reponse = await fetch(url);
      if (!reponse.ok) {
        throw new Error(`HTTP error! status: ${reponse.status}`);
      }
      const user = await reponse.json();
      setUser(user);
      // console.log(user);
    } catch (error) {
      console.log(error)
    }
  };

  if (user !== null) {
    return (
      <ul>
        <li>
          <img src={user.avatar_url} />
        </li>
        <li>{user.name}</li>
      </ul>
    );
  }
  return <div> User is not exist</div>;
};
export default MultipleReturnsFetchData;
