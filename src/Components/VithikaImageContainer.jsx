import React from "react";

function VithikaImageContainer(props){
    return (
        <div className="relative aspect-square overflow-hidden cursor-pointer transform: none">
            <img src={props.image} alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg opacity: 1;"/>
        </div>
    )
}

export default VithikaImageContainer;