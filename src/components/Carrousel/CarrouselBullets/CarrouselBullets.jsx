import React from 'react';
import './Style.css';

const CarrouselBullets = (props) =>{
    const fetchBullets = () =>{
        let  divList = [];

        for(let i = 0; i < props.amount; i++){
            divList.push(<div className="carrousel-bullet"
            key={i}
            id={"bullet-"+i}
            onClick={() => {props.toggle(i)}}/>);
        }

        return divList;
    }

    return <div id="carrousel-bullets">
        {
            fetchBullets()
        }
    </div>
}

export default CarrouselBullets;