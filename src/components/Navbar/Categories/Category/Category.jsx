import React from 'react'
import './Style.css'

const Category = (props) =>{
    return  <li className={"nav-category"}
                id={"nav-"+props.id}
                onClick={() => {props.toggle(props.id)}}>
                    <span>
                        {props.name}
                    </span>
            </li>
}

export default Category;