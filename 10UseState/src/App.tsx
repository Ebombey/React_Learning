import React, { useState } from "react";
import "./App.css";

function App() {
  const [friends, setFriends] = useState<string[]>([]);
  const [newFriend, setNewFriend] = useState<string>("");

  function addFriend() {
    if (newFriend.trim()) {
      setFriends((prev) => [...prev, newFriend]);
      setNewFriend("");
    }
  }

  function removeFriend(friend: string) {
    setFriends((prev) => prev.filter((f) => f !== friend));
  }

  function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      addFriend();
    }
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Friend Name"
          value={newFriend}
          onChange={(e) => setNewFriend(e.target.value)}
          onKeyDown={handleEnter}
        />
        <button onClick={addFriend}>Add</button>
        <button onClick={() => removeFriend(newFriend)}>Remove</button>
      </div>

      <div>
        <ul>
          {friends.map((friend) => (
            <li key={friend}>{friend}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
