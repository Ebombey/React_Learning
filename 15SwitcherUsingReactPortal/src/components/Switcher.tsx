import { useState } from "react";

const Switcher = () => {
  const [sw, setSw] = useState(false);

  return (
    <div>
      {sw ? <span>Dark</span> : <span>Light</span>}
      <br />
      <input
        type="text"
        key={sw ? "dark" : "light"} // Key is provided to make it unique
        placeholder={sw ? "dark" : "light"} // just to check it works or not
      />
      <button onClick={() => setSw((s) => !s)}>Switch</button>
    </div>
  );
};

export default Switcher;
