import React from "react";

function UpperFront(){
    return (
        <div className="fixed left-0 right-0 top-0 z-50 w-full  text-yellow-500 py-2 sm:py-0 sm:bg-[rgba(30,30,30)] sm:shadow-[0_1px_5px_3px_rgba(0,0,0,0.6)]">
            <div className="innerWidth max-w-[1200px] flex justify-between items-center p-4 bg-[rgba(30,30,30)] max-sm:hidden">
                <a className="px-20 font-bold text-2xl active" href="">तूर्यनाद समिति</a>
                <div className="flex gap-5 lg:gap-10 text-xl max-md:text-lg">
                    <a className="hover:scale-110" href="">मुख्य पृष्ठ</a>
                    <a className="hover:scale-110" href="">अतिथि</a>
                    <a className="hover:scale-110" href="">सदस्य</a> 
                    <a className="hover:scale-110" href="">प्रतियोगिताएँ</a>
                    <a className="hover:scale-110 " href="">वीथिका</a>
                </div>
            </div>
        </div>
        
    );
}

export default UpperFront;