import { useState, memo } from "react";

const Count = () => {
    const [count, setCount] = useState(0);
    console.log('count')
  return (
    <button
      className="btn"
      onClick={() => setCount(count + 1)}
      style={{ marginBottom: "1rem" }}
    >
      count {count}
    </button>
  );
};
export default memo(Count) ;
