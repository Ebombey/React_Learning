import { createContext, ReactNode, useState } from "react";

interface UserContextType {
  username: string;
  updateUser: (newName: string) => void;
}

const UserContext = createContext<UserContextType>({
  username: "",
  updateUser: () => {},
});

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState("Naveen");

  const updateUser = (newName: string) => {
    setUsername(newName);
  };

  return (
    <UserContext.Provider value={{ username, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
