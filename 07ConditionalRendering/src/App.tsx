import "./App.css";
import Greeting from "./components/Greeting.tsx";
import UserStatus from "./components/UserStatus.tsx";
import Weather from "./components/Weather.tsx";

function App() {
  return (
    <>
      <section>
        <Weather temp={20} />
        <UserStatus loggedIn={true} isAdmin={true} />
        <br />
        <Greeting timeOfDay="night" />
      </section>
    </>
  );
}

export default App;
