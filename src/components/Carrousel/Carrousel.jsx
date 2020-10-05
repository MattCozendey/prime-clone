import React from 'react';
import './Style.css';

import CarrouselItem from './CarrouselItem/CarrouselItem';
import CarrouselBullets from './CarrouselBullets/CarrouselBullets'

const Carrousel = (props) =>{
    let thisAmount = 0;
    const setAmount = (number) =>{
        if(typeof number == "number"){
            thisAmount = number;
        }
    }
    const getAmount = () =>{
        return thisAmount;
    }
    const fetchCarrouselImages = () =>{
        return props.titles.map((title, index)=>{
            setAmount(index + 1);
            return <CarrouselItem title={title.title} id={title.id} url={title.url} key={title.id}/>
        });
    }

    const toggle = (index) =>{
        const bulletToBeActivated = document.getElementById("bullet-" + index);
        
        for(let i = 0; i < getAmount(); i++){
            const bulletInQueue = document.getElementById("bullet-"+i);
            
            bulletInQueue.classList.remove("bullet-active");
        }
        bulletToBeActivated.classList.add("bullet-active");
    }

    return <div id="Carrousel">
        {fetchCarrouselImages()}
        <CarrouselBullets amount={getAmount()} toggle={toggle}/>
        </div>
}

export default Carrousel;