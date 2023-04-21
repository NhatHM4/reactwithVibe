import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)
  const handleIncrease =()=>{


   
    // setTimeout(() => {
    //   setValue(value+1)
    // }, 1000);
    // setValue(value+1)
    // console.log(value)
  }
  return (
    <>
  <h2>
    {value}
  </h2>
  <button onClick={()=>{(handleIncrease())}}>INCREASE</button>
  </>
  )
  
};

export default UseStateGotcha;
