import React from 'react'
import './Style.css'

import Category from './Category/Category'

const Categories = (props) =>{
    const toggle = (index) => {
        const categoryToBeActivated = document.getElementById("nav-" + index);
        
        for(let i = 0; i < props.categories.length; i++){
            const category = document.getElementById("nav-"+props.categories[i].id);
            
            category.classList.remove("active");
        }
        categoryToBeActivated.classList.add("active");
    }
    const fetchCategories = () =>{
        return props.categories.map((category)=>{
            return <Category key={category.id} id={category.id} name={category.name} toggle={toggle}/>
        })
    }
    
    const displayCategoriesMobile = ()=>{
        const navCategories = document.getElementById("nav-categories");
        const navCategory = [...document.getElementsByClassName("nav-category")];

        navCategories.classList.toggle("nav-mobile-active")
        navCategory.forEach((category)=>{
            category.classList.toggle("nav-mobile-active")
        });
    }

    return<>
        <h1 id="nav-categories-mobile" onClick={displayCategoriesMobile}>
                <span>
                    Explorar
                </span>
            </h1>
        <ul id="nav-categories">
            {fetchCategories()}
        </ul>
    </>
}

export default Categories;