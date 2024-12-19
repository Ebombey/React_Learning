import "./App.css";
import Accordion from "./components/Accordion.tsx";
import { accordionData } from "./utils/content.ts";

function App() {
  return (
    <>
      <div className="border-2 border-solid bg-[#494949]">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </>
  );
}

export default App;
