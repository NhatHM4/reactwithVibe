import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name : "Nhat",
    age : "25",
    hobby : "Reading"
  })
  const [name,setName] = useState("Nhat")
  const [age,setAge] = useState(25)
  const [hobby,setHobby] = useState("Reading")
  const handleNewPerson = ()=>{
    setPerson({ ...person, name:"Hung"
    })
  }
  return <>
    <h1>{person.name}</h1>
    <h1>{person.age}</h1>
    <h1>{person.hobby}</h1>
    <button onClick={()=>{handleNewPerson()}}> Show john</button>
  </>
};

export default UseStateObject;
