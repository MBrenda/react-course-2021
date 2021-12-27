import { useState } from "react";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import data from "../../data/user.json"
import "./style.css"

export default function Search(){     
    //constantes de estados
    const [isAtTop, setIsAtTop] = useState(false);
    const [results, setResults] = useState([]);

    //evento generico 
    const handlecCloseSearch = () => {
        setIsAtTop(false)
        setResults([]);
};
    const handleSearchClick = (searchText) => {
        setIsAtTop(true);
        //si la busqueda que hago tiene alguno de estos datos me lo devuelve filtrado
        if(data?.length){
            const searchTextMinus = searchText.toLowerCase();
            const filteredData = data.filter((value) => {
                return( 
                value.name.toLowerCase().includes(searchTextMinus) || 
                value.phone.toLowerCase().includes(searchTextMinus) ||
                value.email.toLowerCase().includes(searchTextMinus) ||
                value.username.toLowerCase().includes(searchTextMinus)
                )
            });
            setResults(filteredData);
        }
    };

    console.log(results);
    return(
        //si esta arriba ? pone una clase css : otra
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
            <SearchBox 
            onSearch={handleSearchClick} 
            onClose={handlecCloseSearch}
            isSearching={isAtTop} />
            <SearchResults results={results} isSearching={isAtTop}/>
        </div>
    );
}