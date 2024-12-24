import React from "react";
import ImageContainer from "./ImageContainer";

function GuestOfYear(props){
    // console.log(props);
    return (
        <div className="max-w-[1200px] flex flex-col items-center  mx-auto ">
            <div className="font-bold text-yellow-500 text-xl py-6 sm:text-2xl">{props.details.year}</div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 flex w-full justify-center">
                {
                    props.details.detail.map(items =>{
                        return(
                            <ImageContainer  image = {items.image} name = {items.name} position = {items.position} ></ImageContainer>
                        )
                    })
                }

            </div>
        </div>
        
    )
}

export default GuestOfYear;