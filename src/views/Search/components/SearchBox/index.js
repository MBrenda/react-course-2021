import { useState } from "react";
import "./style.css";

//lo que recibe lo manda la fc padre
export default function SearchBox({ onSearch, onClose, isSearching }){
    const[searchText, setSearchText] = useState("");

    const handleSearchClick = () => {
        setSearchText("");
        onClose(); 
    }

    return(
        <div className="search-box">
            <h2 className="search-box-title">Buscador de personal</h2>
            <div className="search-box-buttons">
                <label>
                    <input value={searchText} 
                    onChange={({ target: {value}}) => setSearchText(value)}
                    className="search-box-input"/>
                </label>
                <button onClick={() => onSearch(searchText)} disabled={!searchText.length}> Buscar </button>
                {isSearching && <button onClick={handleSearchClick}> Cerrar </button>}
            </div>
        </div>
    );
}