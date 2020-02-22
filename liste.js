import React from 'react';
import Star from "./stars"
function Liste(props) {
    return (
        <div className="liste">
{props.detail.map(el => <div>
    <Star   ratechercher={()=>{}}  rates={el.rate}/>
<img className="img" src={el.image} />
<div className="titre"><h3>{el.name}</h3>
<h3>{el.year}</h3></div>
</div>)
}




        </div>
    )
}

export default Liste;
