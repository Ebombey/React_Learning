import { useContext } from "react";
import { UserContext } from "../context/UserProvider.tsx";

const UserProfile = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>Name: {user?.username}</h1>
    </div>
  );
};

export default UserProfile;
