import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div>
      <motion.div
        className="box"
        variants={{
          blink: { opacity: [0, 0.5, 1, 0.5, 0], scale: [0, 1, 0] },
          visible: { opacity: 0, scale: 1 },
        }}
        animate="blink"
        transition={{ duration: 5, repeat: Infinity }}
      />
    </div>
  );
}

export default App;
