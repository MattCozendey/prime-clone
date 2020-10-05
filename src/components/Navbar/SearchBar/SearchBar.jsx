import React from 'react';
import './Style.css';

import magnifyingGlass from './assets/glass.png';

const SearchBar = () =>{
    const initSearch = () =>{
        const searchBarParent = document.getElementById("searchBarParent");
        const magnifyingGlassDiv = document.getElementById("nav-glass");

        searchBarParent.classList.add("search-bar-active");
        magnifyingGlassDiv.classList.add("glass-active");
    }

    const disableSearch = () =>{
        const searchBarParent = document.getElementById("searchBarParent");
        const magnifyingGlassDiv = document.getElementById("nav-glass");

        searchBarParent.classList.remove("search-bar-active");
        magnifyingGlassDiv.classList.remove("glass-active");
    }

    const toggleSearchCleaner = () =>{
        const clearSearchBar = document.getElementById("clearSearchBar");
        const inputDiv = document.getElementById("searchBar");
        const inputDivNotEmpty = inputDiv.value.length;

        if(inputDivNotEmpty){
            return clearSearchBar.classList.add("clearSearchBar-active");
        }
        clearSearchBar.classList.remove("clearSearchBar-active");
    }

    const clearSearch = () =>{
        const inputDiv = document.getElementById("searchBar");
        const clearSearchBar = document.getElementById("clearSearchBar");

        inputDiv.value = "";
        clearSearchBar.classList.remove("clearSearchBar-active");
        inputDiv.focus();
    }
    return <div id="searchBarParent" onClick={initSearch} onBlur={disableSearch}>
        <img id="nav-glass" src={magnifyingGlass} alt="" srcSet=""/>
        <input id="searchBar" type="text" placeholder="Busca" onInput={toggleSearchCleaner}/>
        <div id="clearSearchBar" onClick={clearSearch}>
            <span>X</span>
        </div>
    </div>
}

export default SearchBar;