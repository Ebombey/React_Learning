import Category from "./Category/Category.tsx";
import Colors from "./Colors/Colors.tsx";
import Price from "./Price/Price.tsx";
import "./Sidebar.css";

type SidebarProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Sidebar = ({ handleChange }: SidebarProps) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>

        <div className="flex flex-col items-start ">
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </div>
      </section>
    </>
  );
};

export default Sidebar;
