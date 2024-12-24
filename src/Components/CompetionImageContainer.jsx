import React from "react";

function CompetionImageContainer(props){
    return (
        <div className="relative">
            <div className="w-full flex flex-col gap-1 pt-5 pb-3 justify-center items-center overflow-hidden rounded-2xl shadow-[0_0px_5px_5px_rgba(0,0,0,0.3)] sm:hover:scale-[1.05] opacity-100 transform-none">
                <img src={props.image} alt="" className="w-[70%] aspect-square object-cover rounded-b-lg rounded-t-3xl border-[3px] border-yellow-500 shadow-[rgba(0,0,15,0.5)_0px_0px_5px_5px]"/>
                <div className="w-full text-white p-1 text-center">
                    <p className="text-lg font-semibold text-black">{props.name}</p>
                    <p className="text-sm text-yellow-500">{props.position}</p>
                </div>
            </div>
        </div>
    );
}

export default CompetionImageContainer;