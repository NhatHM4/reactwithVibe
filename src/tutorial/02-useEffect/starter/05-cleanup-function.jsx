import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return <>
  <button onClick={()=>{setToggle(!toggle)}}>Toggle component</button>
  <CleanupFunctionToggle toggle ={toggle}/>
  </>;
};

export default CleanupFunction;

const CleanupFunctionToggle = ({ toggle }) => {
  useEffect(() => {

  }, []);

  return (
   toggle && <h1>Cleanup component</h1>
    
  )
};
