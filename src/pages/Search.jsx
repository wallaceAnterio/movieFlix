import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { BarLoader, ClipLoader } from "react-spinners";

import MovieCard from "../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "../pages/styles/MoviesGrid.css";

const Search = () => {
   const [searchParams] = useSearchParams();

   const [movies, setMovies] = useState([]);
   const query = searchParams.get("");

   const getSearchedMovies = async (url) => {
      const res = await fetch(url);
      const data = await res.json();

      setMovies(data.results);
   };

   useEffect(() => {
      const searchWhitQueryURL = `${searchURL}?${apiKey}&query=${query}`;

      getSearchedMovies(searchWhitQueryURL);
   }, [query]);

   return (
      <div className="container">
         <h2 className="title">
            Resultados para: <span className="query-text">{query}</span>
         </h2>
         <div className="movies-container">
            {movies.length === 0 && (
               <p style={{textAlign: 'center'}}>
                  <BarLoader color="green" size={500} width={400} />
               </p>
            )}
            {movies.length > 0 &&
               movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
               ))}
         </div>
      </div>
   );
};

export default Search;