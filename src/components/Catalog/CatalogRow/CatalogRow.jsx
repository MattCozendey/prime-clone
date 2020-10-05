import React from 'react';
import './Style.css';
import CatalogItem from './CatalogItem/CatalogItem';
import PrimeTag from './assets/tag-prime.png';

const CatalogRow = (props) =>{
    const fetchCategoryItems = () =>{
        return props.titles.map((title, index)=>{
            return <CatalogItem key={index} id={title.id} title={title.title} url={title.url} tag={title.tag}/>
        })
    }

    const hasTag = () =>{
        if(props.tag){
            const tag = props.tag;
            let src;

            switch(tag){
                case "prime":
                        src = PrimeTag;
                    break;
            }
            return <img className="catalog-tag" src={src}></img>
        }
    }
    return <div className="catalogRow-parent">
        <h1>
        {hasTag()}{props.orientation}
        </h1>
        <div className="catalogActualRow">
            {fetchCategoryItems()}
        </div>
    </div>
}

export default CatalogRow;