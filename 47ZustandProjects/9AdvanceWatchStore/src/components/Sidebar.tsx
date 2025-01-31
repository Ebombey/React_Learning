import { useState } from "react";
import Navigation from "./Navigation.tsx";
import { useFilterStore } from "../store/useWatchStore.ts";
import { FiChevronDown, FiX } from "react-icons/fi";
import { data } from "../db/index.ts";

// interface ProductType {
//   country: string;
//   img: Record<string, string>;
//   price: number;
// }

const Sidebar = () => {
  // States
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [countryDropdown, setCountryDropdown] = useState<boolean>(false);
  const [colorDropdown, setColorDropdown] = useState<boolean>(false);
  const [priceDropdown, setPriceDropdown] = useState<boolean>(false);

  // Filter States
  const {
    selectedCountries,
    selectedColors,
    selectedPriceRange,
    setSelectedCountries,
    setSelectedColors,
    setSelectedPriceRange,
    clearFilters,
  } = useFilterStore();

  // Toggle Sidebar Function
  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleCountryDropdown = () => setCountryDropdown(!countryDropdown);
  const toggleColorDropdown = () => setColorDropdown(!colorDropdown);
  const togglePriceDropdown = () => setPriceDropdown(!priceDropdown);

  // Selection Function
  const handleCountrySelection = (country: string) => {
    setSelectedCountries(
      selectedCountries.includes(country)
        ? selectedCountries.filter((c) => c !== country)
        : [...selectedCountries, country]
    );
  };
  const handleColorSelection = (color: string) => {
    setSelectedColors(
      selectedColors.includes(color)
        ? selectedColors.filter((c) => c !== color)
        : [...selectedColors, color]
    );
  };
  const handlePriceRangeSelection = (
    range: {
      min: number;
      max: number;
      label: string;
    } | null
  ) => {
    setSelectedPriceRange(range);
  };

  // Unique data
  const uniqueCountry = Array.from(
    new Set(data.map((product) => product.country))
  );

  return (
    <div>
      <Navigation toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button className="text-xl" onClick={toggleSidebar}>
            <FiX />
          </button>
        </div>

        {/* Filters */}
        <div className="p-4 space-y-6">
          {/* Country filter */}
          <div>
            <button
              className="flex items-center justify-between w-full text-left"
              onClick={toggleCountryDropdown}
            >
              <span className="font-medium">Country</span>
              <FiChevronDown
                className={`transform ${
                  countryDropdown ? "rotate-180" : ""
                } transition-transform duration-300 ease-in-out`}
              />
            </button>

            {countryDropdown && (
              <div className="mt-2 space-y-2">
                {uniqueCountry.map((country, index) => (
                  <div
                    key={index}
                    className="flex items-center"
                    // onClick={() => handleCountrySelection(country)}
                  >
                    <input
                      id={country}
                      type="checkbox"
                      checked={selectedCountries.includes(country)}
                      onChange={() => handleCountrySelection(country)}
                      className="mr-2"
                    />
                    {/* <span>{country}</span> */}
                    <label htmlFor={country} className="cursor-pointer">
                      {country}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Color filter */}
          <div>
            <button
              className="flex items-center justify-between w-full text-left"
              onClick={toggleColorDropdown}
            >
              <span className="font-medium">Color</span>
              <FiChevronDown
                className={`transform ${
                  colorDropdown ? "rotate-180" : ""
                } transition-transform duration-300 ease-in-out`}
              />
            </button>

            {colorDropdown && (
              <div className="mt-2 space-y-2">
                {["black", "brown", "red", "white", "golden"].map((color) => (
                  <div
                    key={color}
                    className="flex items-center"
                    // onClick={() => handleColorSelection(color)}
                  >
                    <input
                      id={color}
                      type="checkbox"
                      checked={selectedColors.includes(color)}
                      onChange={() => handleColorSelection(color)}
                      className="mr-2"
                    />
                    <label htmlFor={color} className="cursor-pointer">
                      {color}
                    </label>
                    {/* <span>{color}</span> */}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Price filter */}
          <div>
            <button
              className="flex items-center justify-between w-full text-left"
              onClick={togglePriceDropdown}
            >
              <span className="font-medium">Price</span>
              <FiChevronDown
                className={`transform ${
                  priceDropdown ? "rotate-180" : ""
                } transition-transform duration-300 ease-in-out`}
              />
            </button>

            {priceDropdown && (
              <div className="mt-2 space-y-2">
                {[
                  { label: "Below $300", min: 0, max: 300 },
                  { label: "$301 - $600", min: 301, max: 600 },
                  { label: "Above $600", min: 601, max: Infinity },
                ].map((range) => (
                  <div
                    key={range.label}
                    // id={range.label}
                    className="flex items-center"
                    // onClick={() => handlePriceRangeSelection(range)}
                  >
                    <input
                      id={range.label}
                      type="radio"
                      checked={selectedPriceRange?.label === range.label}
                      onChange={() => handlePriceRangeSelection(range)}
                      className="mr-2"
                    />
                    <label htmlFor={range.label} className="cursor-pointer">
                      {range.label}
                    </label>
                    {/* <span>{range.label}</span> */}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex justify-between p-4 border-t">
            <button
              onClick={clearFilters}
              className="px-4 py-2 mr-2 text-white bg-black rounded"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={toggleSidebar}
        >
          {" "}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
