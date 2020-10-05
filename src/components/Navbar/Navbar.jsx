import React from 'react';
import './Style.css';

import Logo from './Logo/Logo';
import Categories from './Categories/Categories';
import SearchBar from './SearchBar/SearchBar';
import UserPanel from './UserPanel/UserPanel';

const Navbar = () =>{
    return <nav>
        <Logo/>
        <Categories categories={
            [
            {id: 0, name: "Início"},
            {id: 1, name: "Séries"},
            {id: 2, name: "Filmes"},
            {id: 3, name: "Infantil"},
            {id: 4, name: "Canais"},]
            }/>
            <div id="navSeparator">
                <SearchBar/>
                <UserPanel userName="Mathews"/>
            </div>
    </nav>
}

export default Navbar;