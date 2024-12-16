import { useState } from "react";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <>
      <div className="p-10 mx-0 my-auto font-sans text-center rounded-xl shadow-customBoxShadow bg-[#f0fdfe]">
        <div className="text-[22px] italic mb-3 text-[#666]">
          {testimonials[currentIndex].quote}
        </div>
        <div className="text-[18px] font-bold mb-[20px] text-[#333]">
          {testimonials[currentIndex].author}
        </div>
        <div className="flex justify-between">
          <button
            className="px-3 py-5 border-none bg-[#82e5ee] text-[#fff] text-base cursor-pointer rounded-md transition-colors duration-300 hover:bg-[#037680] active:scale-[0.95]"
            onClick={handlePrevClick}
          >
            Prev
          </button>
          <button
            className="px-3 py-5 border-none bg-[#82e5ee] text-[#fff] text-base cursor-pointer rounded-md transition-colors duration-300 hover:bg-[#037680] active:scale-[0.95]"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
