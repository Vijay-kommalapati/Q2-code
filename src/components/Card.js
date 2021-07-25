import React from "react";

function Card(props){
    return <div className="card">
        <img src={props.src} />
        <p>{props.fn+" "+props.ln}</p>
        <p>{props.email}</p>
    </div>
}

export default Card;