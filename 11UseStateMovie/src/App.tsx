import { useState } from "react";
import "./App.css";

interface MovieType {
  title: string;
  rating: number;
  year: number;
}

function App() {
  const [movie, setMovie] = useState<MovieType>({
    title: "Avengers",
    rating: 5,
    year: 2022,
  });

  const updateMovie = () => {
    setMovie({ ...movie, title: "Avengers 2" });
  };
  return (
    <>
      <h1>Movie: {movie.title}</h1>
      <h1>Rating: {movie.rating}</h1>
      <h1>Year: {movie.year}</h1>
      <button onClick={updateMovie}>Update Movie</button>
    </>
  );
}

export default App;
