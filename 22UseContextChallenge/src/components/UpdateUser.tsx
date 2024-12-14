import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider.tsx";

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newName.trim()) {
      updateUser(newName);
      setNewName("");
    }
  };

  return (
    <>
      <h2>Update User Name</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter New Name"
        />
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default UpdateUser;
