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
    const [watched, setWatched] = useLocalStorageState([], "watched");
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(false);

    const {
      Title: title,
      Year: year,
      Poster: poster,
      Runtime: runtime,
      imdbRating,
      Plot: plot,
      Released: released,
      Actors: actors,
      Director: director,
      Genre: genre,
    } = movie;
    console.log(title,year, runtime)
    const handleSelectMovie = (id)=>{
      setSelectedId((selectedId) => (id === selectedId ? null : id));
      
    }
    const handleCloseMovie =()=>{
      setSelectedId(null);
    }
  
    const handleAddWatched = (movie)=>{
      setWatched((watched) => [...watched, movie]);
    }
  //Movie fetch function
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
  //////////////////////////////////////Movie fetch function

  ///Movie Details Fetch Function
  useEffect(
    function () {
    async function getMovieDetails() {
    const KEY = '687f849f';
    setLoading(true);
    const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
    const data = await res.json();
    //console.log(data)
    //console.log("async", selectedId)
    setMovie(data);
    setLoading(false);
    }
      getMovieDetails();
    },
    [selectedId]
  );
  /////////////Movie Details Fetch Function
  
  //Effect to change page title...
  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      return function () {
        document.title = "usePopcorn";
        // console.log(`Clean up effect for movie ${title}`);
      };
    },
    [title]
  );
//////////////////////////////

 function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
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
          setError,
          handleCloseMovie,
          handleAddWatched,
          useLocalStorageState,
          watched,
          setWatched,
          movie,
          setMovie,
          loading,
          setLoading,
          title,
          year,
          poster,
          runtime,
          imdbRating,
          plot,
          released,
          actors,
          director,
          genre
        }}
      >
        {children}
      </PopContext.Provider>
    );
  }
  
  export default PopContext