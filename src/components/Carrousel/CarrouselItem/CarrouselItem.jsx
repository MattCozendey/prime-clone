import React from 'react';
import './Style.css';

const CarrouselItem = (props) =>{
    return <div className="carrouselItem-parent" id={"car-"+props.id}>
        <img src={props.url} alt={props.title}/>
    </div>
}

export default CarrouselItem;