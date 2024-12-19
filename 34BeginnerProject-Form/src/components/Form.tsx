import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (username.length > 8) {
      setErrorUsername("");
      setUserColor("green");
    } else {
      setErrorUsername("Username must 8 letters long");
      setUserColor("red");
    }

    if (email.includes("@")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("Email is not valid");
      setEmailColor("red");
    }

    if (password.length >= 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password must 8 letters long");
      setPasswordColor("red");
    }

    if (password !== "" && password === confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Password does not match");
      setConfirmPasswordColor("red");
    }
  };

  return (
    <>
      <div className="card bg-[#f3fffe] grid grid-cols-2 w-[50rem] h-[30rem] shadow-[0.5px_0.5px_1px_1px_rgb(255, 255, 223)]">
        <div className="bg-mountain"></div>

        <form className="flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder="Username"
            style={{ borderColor: userColor }}
            className="p-2 m-1 w-[20rem] bg-transparent  outline-none border-b border-gray-300"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="font-sans text-red-600">{errorUsername}</p>

          <input
            type="email"
            placeholder="Email"
            style={{ borderColor: emailColor }}
            className="p-2 m-1 w-[20rem] bg-transparent  outline-none border-b border-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="font-sans text-red-600">{errorEmail}</p>

          <input
            type="password"
            placeholder="Password"
            style={{ borderColor: passwordColor }}
            className="p-2 m-1 w-[20rem] bg-transparent  outline-none border-b border-gray-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="font-sans text-red-600">{errorPassword}</p>

          <input
            type="password"
            placeholder="Confirm Password"
            style={{ borderColor: confirmPasswordColor }}
            className="p-2 m-1 w-[20rem] bg-transparent  outline-none border-b border-gray-300"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="font-sans text-red-600">{errorConfirmPassword}</p>

          <button
            className="w-4/5 mt-5 px-[10px] py-5 bg-transparent bg-[#ff5a7b] cursor-pointer border-none text-white font-bold"
            onClick={validate}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
