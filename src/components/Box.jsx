import { useContext } from "react";
import PopContext from "../context/PopContext";

const Box = ({ children })=>{
    const{isOpen, setIsOpen} = useContext(PopContext)
    return (
        <div className="box">
          <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
            {isOpen ? "–" : "+"}
          </button>
    
          {isOpen && children}
        </div>
      );
}

export default Box