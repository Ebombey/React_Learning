const UserLists = () => {
  const users = [
    { id: 1, name: "Alice", age: 35 },
    { id: 2, name: "Bob", age: 26 },
    { id: 3, name: "Charlie", age: 38 },
  ];
  return (
    <>
      {users.map((user) => (
        <div key={user.name}>
          <ul>
            <li>{user.name}</li>
            <li>{user.age}</li>
          </ul>

          <br />
        </div>
      ))}
    </>
  );
};

export default UserLists;
