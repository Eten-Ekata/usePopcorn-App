import { createContext, useState } from "react";
const PopContext = createContext()

export const PopProvider = ({ children }) => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
  
    return (
      <PopContext.Provider
        value={{
          query,
          setQuery,
          movies,
          setMovies
        }}
      >
        {children}
      </PopContext.Provider>
    );
  }
  
  export default PopContext