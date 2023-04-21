import { useState, useEffect } from "react";
const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("first time");
    logJsonData();
  }, []);

  const logJsonData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData);
    setUsers(jsonData)
  };
  return (
    <>
      {
        users.map((item)=>{
          return (
            <div>
                <h1>{item.login}</h1>
                <h2>{item.node_id}</h2>
                <img src={item.avatar_url}/>
            </div>
          )
        })
      }
    </>
  )
};
export default FetchData;
