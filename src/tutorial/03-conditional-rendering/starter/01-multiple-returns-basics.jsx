import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(true)
    }, 2000);
  },[])
  // return (
  //   <div>
  //     {!isLoading?"Loading": "Multi return component"}
  //   </div>
  // )

  if (isLoading){
    return(
      <h1>
        Multi return component
      </h1>
    )
  } 
    return <h1>Loading...</h1>
  
 
};
export default MultipleReturnsBasics;
