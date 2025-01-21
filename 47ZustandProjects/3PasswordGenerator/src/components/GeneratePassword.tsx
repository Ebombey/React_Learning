import usePasswordStore from "../store/store.ts";

const GeneratePassword = () => {
  const {
    length,
    includeNumber,
    includeSymbols,
    includeUppercase,
    includeLowercase,
    generatedPassword,
    setLength,
    toggleNumber,
    toggleSymbols,
    toggleUppercase,
    toggleLowercase,
    generatePassword,
  } = usePasswordStore();

  const handleGeneratePassword = () => generatePassword();

  return (
    <div className="p-8 w-[40rem] mx-auto shadow-lg bg-white rounded-lg">
      <h1 className="mb-4 text-2xl font-bold">Password Generator</h1>

      <div className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="length"
            className="block text-sm font-medium text-gray-700"
          >
            Password Length
          </label>
          <input
            type="number"
            id="length"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            min={4}
            max={64}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={includeNumber}
              onChange={toggleNumber}
            />
            <label className="ml-2 text-sm">Include Number</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={toggleSymbols}
            />
            <label className="ml-2 text-sm">Include Symbols</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={toggleUppercase}
            />
            <label className="ml-2 text-sm">Include Uppercase</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={toggleLowercase}
            />
            <label className="ml-2 text-sm">Include Lowercase</label>
          </div>
        </div>

        <button
          onClick={handleGeneratePassword}
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Generate Password
        </button>

        {generatedPassword && (
          <div className="p-4 mt-4 bg-gray-100 rounded-lg">
            <p className="text-lg break-all">{generatedPassword}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneratePassword;
