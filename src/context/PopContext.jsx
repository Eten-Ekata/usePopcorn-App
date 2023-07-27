import { createContext, useState } from "react";
const PopContext = createContext()

export const PopProvider = ({ children }) => {
    const [query, setQuery] = useState(100);
    const [movies, setMovies] = useState(200);
  
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