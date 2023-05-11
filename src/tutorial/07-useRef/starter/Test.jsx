import { useRef, useState,useEffect } from "react";

const Test = () => {
  const [count, setCount] = useState(60);
  const timer = useRef();
  const abc = useRef()
  const handleGo = () => {
    timer.current = setInterval(() => {
      setCount((lastCount) => {
        return lastCount - 1;
      });
    }, 3000);
  };
  const handleStop = () => {
    clearInterval(timer.current);
  };
  useEffect(()=>{
    console.log("intial")
    abc.current=count
  },[count])
  console.log(count+"...."+abc.current)
  return (
    <div>
      {count}
      <button
        className="btn"
        onClick={() => {
          handleGo();
        }}
      >
        Go
      </button>
      <button
        className="btn"
        onClick={() => {
          handleStop();
        }}
      >
        Stop
      </button>
    </div>
  );
};

export default Test;
