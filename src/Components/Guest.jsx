import React from "react";
import ImageContainer from "./ImageContainer";
// import images2 from './images/2.jpeg';
// import image from './images/bhooribai.jpg'
import Dataset from "./DatasetOfGuest";
import GuestOfYear from "./GusetOfYear";

function Guest(){
    return (
        <div className="md:mt-14 ">
            <div className="max-w-[1200px] flex flex-col items-center gap-5 mx-auto px-4 py-4 mt-20">
                <div className="font-bold text-yellow-500 text-xl sm:text-3xl">अतिथि पृष्ठ</div>
                {
                    Dataset.map(item =>{
                        return(
                            <GuestOfYear details = {item}></GuestOfYear>
                        )
                    })
                }

            </div>
        </div>
    );
}

export default Guest;