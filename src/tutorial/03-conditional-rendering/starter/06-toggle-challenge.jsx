import { useState } from "react";

const ToggleChallenge = () => {
  const [toggle, setToggle] = useState(false)
  return <>
  <button onClick={()=>{setToggle(!toggle)}}>run alert</button>
  <Component toggle={toggle}/>
  </>;
};

export default ToggleChallenge;

const Component = ({toggle})=>{
  console.log(toggle)
  return <div>
    {toggle && <div>
        Hien thi thanh cong
      </div>}
  </div>
}
