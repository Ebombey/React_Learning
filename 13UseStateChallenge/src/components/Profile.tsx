import React, { useState } from "react";

interface ProfileProps {
  name?: string;
  age?: number;
}

const Profile = () => {
  const [info, setInfo] = useState<ProfileProps>({});

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInfo({ name: "", age: 0 });
  };

  return (
    <div>
      <form action="submit">
        <input
          type="text"
          placeholder="Name"
          value={info?.name}
          onChange={(e) => setInfo({ ...info, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          value={info?.age}
          onChange={(e) => setInfo({ ...info, age: Number(e.target.value) })}
        />
        <button onClick={handleClick}>Add</button>
      </form>
      name: {info?.name} age: {info?.age}
    </div>
  );
};

export default Profile;
