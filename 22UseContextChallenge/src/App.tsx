import "./App.css";
import UpdateUser from "./components/UpdateUser.tsx";
import UserProfile from "./components/UserProfile.tsx";
import { UserProvider } from "./context/UserProvider.tsx";

function App() {
  return (
    <UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>
  );
}

export default App;
