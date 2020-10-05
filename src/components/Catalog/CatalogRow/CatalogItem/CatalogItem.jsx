import React from 'react';

import './Style.css';

import PrimeTag from './assets/tag-prime.png';

const CatalogItem = (props) =>{
    const ThisDiv = () =>{
        return document.getElementById("cat-"+props.id);
    }
    const showPop = () => {
        if(!document.getElementById("pop-"+props.id)){
            const popDiv = document.createElement("div");
            popDiv.setAttribute("class", "catalogItemPopUp");
            popDiv.setAttribute("id", "pop-"+props.id);
    
            const popDivImg = document.createElement("img");
            popDivImg.setAttribute("src", props.url);
    
            popDiv.appendChild(popDivImg);
            ThisDiv().appendChild(popDiv);
    
            popDiv.classList.add("pop-active");
        }
    }

    const hidePop = () =>{
        const popDiv = document.getElementById("pop-"+props.id);
        console.log(popDiv);
        popDiv.parentNode.removeChild(popDiv);
    }

    const hasTag = () =>{
        if(props.tag){
            const tag = props.tag;
            let url;

            switch(tag){
                case "prime":
                    url = PrimeTag;
                break;
                default:
                    return;
            }

            return <img className="catalog-item-tag" alt="img" id={"cat-tag"+props.id} src={url}></img>
        }
    }

    return <div className="catalogItem" id={"cat-" + props.id} onMouseEnter={showPop} onMouseLeave={hidePop}>
        {hasTag()}
        <img src={props.url} alt="img" srcSet=""/>
    </div>
}

export default CatalogItem;