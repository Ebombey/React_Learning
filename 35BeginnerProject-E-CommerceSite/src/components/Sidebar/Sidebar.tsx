import Category from "./Category/Category.tsx";
import Colors from "./Colors/Colors.tsx";
import Price from "./Price/Price.tsx";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>

        <div className="flex flex-col items-start ">
          <Category />
          <Price />
          <Colors />
        </div>
      </section>
    </>
  );
};

export default Sidebar;
