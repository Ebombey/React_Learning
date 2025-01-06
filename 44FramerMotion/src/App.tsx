import "./App.css";
import PulsingButton from "./components/PulsingButton.tsx";
import BouncingLoader from "./components/BouncingLoader.tsx";

function App() {
  return (
    <div>
      {/* <motion.div
        className="box"
        initial={{ x: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, delay: 5, ease: "easeInOut" }}
      /> */}

      {/* <motion.div
        className="box"
        animate={{
          scale: [1, 2, 1],
          rotate: [0, 90, 180, 270, 360, 270, 180, 90, 0],
          borderRadius: ["0%", "25%", "50%", "25%", "0%"],
        }}
        transition={{ duration: 5 }}
      /> */}

      {/* <PulsingButton /> */}
      <BouncingLoader />
    </div>
  );
}

export default App;
