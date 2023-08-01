import { useContext } from "react";
import PopContext from "../context/PopContext";

const ErrorMessage=()=>{
    const{error} = useContext(PopContext)
    return (
      <p className="error">
        <span>⛔️</span> {error}
      </p>
    );
  }

  export default ErrorMessage