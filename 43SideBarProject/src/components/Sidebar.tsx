import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <aside className="sidebar fixed top-0 left-0 h-screen w-20 bg-[#1a1c1e] text-white">
      <ul className="flex flex-col items-center justify-between h-full p-4">
        <div className="top">
          <li className="mb-2">
            <div className="flex item-container">
              <FaHome className="mb-3 mr-2" size={18} />
            </div>
          </li>

          <li className="mb-2">
            <div className="flex item-container">
              <FaUser className="mb-3 mr-2" size={18} />
            </div>
          </li>

          <li className="mb-2">
            <div className="flex item-container">
              <FaSearch className="mb-3 mr-2" size={18} />
            </div>
          </li>
        </div>

        <div className="bottom">
          <li>
            <IoMdSettings size={18} />
            <FaUser className="mt-5" size={18} />
          </li>
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
