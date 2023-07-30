import { createContext, useState, useEffect } from "react";
const PopContext = createContext()

export const PopProvider = ({ children }) => {
  const KEY = '687f849f';
  
    const [query, setQuery] = useState("dolly");
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const [selectedId, setSelectedId] = useState(null);
    const [error, setError] = useState("");


    const handleSelectMovie = (id)=>{
      setSelectedId((selectedId) => (id === selectedId ? null : id));
      
    }
  
  useEffect(
    function () {
      // callback?.();

      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          console.log(data)
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  // // return { movies, isLoading, error };

  
    return (
      <PopContext.Provider
        value={{
          query,
          setQuery,
          movies,
          setMovies,
          isLoading,
          setIsLoading,
          isOpen,
          setIsOpen,
          selectedId,
          setSelectedId,
          handleSelectMovie,
          error,
          setError
        }}
      >
        {children}
      </PopContext.Provider>
    );
  }
  
  export default PopContext