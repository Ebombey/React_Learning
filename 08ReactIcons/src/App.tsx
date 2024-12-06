import "./App.css";
import StyledCard from "./components/StyledCard.tsx";
import ProfileCard from "./components/ProfileCard.tsx";
import IconComponent from "./components/IconComponent.tsx";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <StyledCard />
        <ProfileCard />
        <IconComponent />
      </div>
    </>
  );
}

export default App;
