import "./App.css";
import ProductCard from "./components/ProductCard.tsx";
import Sidebar from "./components/Sidebar.tsx";
import { data } from "./db/index.ts";
import { useFilterStore } from "./store/useWatchStore.ts";

interface Product {
  id: string;
  country: string;
  img: Record<string, string | undefined>;
  price: number;
}

function App() {
  const { selectedCountries, selectedColors, selectedPriceRange } =
    useFilterStore();

  const filterData = data.filter((item: Product) => {
    const matchesColor =
      selectedColors.length === 0 ||
      Object.keys(item.img).some((color) => selectedColors.includes(color));

    const matchesCountry =
      selectedCountries.length === 0 ||
      selectedCountries.includes(item.country);

    const matchesPrice = selectedPriceRange
      ? item.price >= selectedPriceRange.min &&
        item.price <= selectedPriceRange.max
      : true;

    return matchesColor && matchesCountry && matchesPrice;
  });
  console.log(data);
  console.log(filterData);
  return (
    <>
      <Sidebar />

      <div className="flex flex-wrap items-center justify-center p-4">
        {filterData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
