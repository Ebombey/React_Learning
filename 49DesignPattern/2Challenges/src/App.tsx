import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SplitScreen from "./components/SplitScreen";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <SplitScreen leftWeight={10} rightWeight={90}>
        <Sidebar />
        <Content />
      </SplitScreen>
      <Footer />
    </div>
  );
}

export default App;
