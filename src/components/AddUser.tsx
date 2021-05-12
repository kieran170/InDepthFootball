import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";

const AddUser = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useContext(UserContext);

  const updateName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const addUser = (event: React.SyntheticEvent):void => {
    event.preventDefault();
    if (name !== '') {
      setUser({name: name})
    }
    
  };

  return (
    <form onSubmit={addUser}>
        <label>Username</label>
      <input type="text" name="name" value={name} onChange={updateName}></input>
      <button>Submit</button>
    </form>
  );
};

export default AddUser;