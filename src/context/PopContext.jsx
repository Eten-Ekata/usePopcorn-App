import { createContext, useState } from "react";
const PopContext = createContext()

export const PopProvider = ({ children }) => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const [selectedId, setSelectedId] = useState(null);
    const [error, setError] = useState("");


    const handleSelectMovie = (id)=>{
      setSelectedId((selectedId) => (id === selectedId ? null : id));
      
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
          setError
        }}
      >
        {children}
      </PopContext.Provider>
    );
  }
  
  export default PopContext