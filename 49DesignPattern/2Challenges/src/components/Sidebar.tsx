const Sidebar = () => {
  return (
    <div className="bg-teal-500 h-full w-[10rem] text-white p-4">
      <h1 className="text-xl">Dashboard</h1>
      <ul className="mt-6 space-x-4">
        <li>
          <a className="hover:text-gray-200" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-gray-200" href="#settings">
            Settings
          </a>
        </li>
        <li>
          <a className="hover:text-gray-200" href="#profile">
            Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
