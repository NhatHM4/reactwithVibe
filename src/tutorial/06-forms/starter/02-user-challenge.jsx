import { useState } from "react";
import { data } from '../../../data';
const UserChallenge = () => {
  const [users, setUsers] = useState(data)
  const [name,setName] = useState("")
  const handleOnchangeName = (e) =>{
    setName(e.target.value)
  }
  const handleAdd =(e)=>{
    e.preventDefault();
    setName("")
    let dataClone = [...users,{id:Math.floor(Math.random() * 100),name:name}]
    setUsers(dataClone)
  }

  const handleRemove = (id)=>{
    let dataClone = users.filter((user)=>{
      return user.id !== id;
    })
    setUsers(dataClone)
  }
  return (
    <div>
      <form className='form'>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={(e)=>{handleOnchangeName(e)}} />
        </div>

        <button className='btn btn-block' onClick={(e)=>{handleAdd(e)}}>
          submit
        </button>
      </form>
      <div>
        {
          users.map((user)=>{
            return (
              <div key={user.id} className="users">
                  <h5>{user.name}</h5>
                  <button className="btn" onClick={()=>{handleRemove(user.id)}}>Remove user</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};
export default UserChallenge;
