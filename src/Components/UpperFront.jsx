import React from "react";

function UpperFront(){
    return (
        <div className="top-14 relative z-1 overflow-hidden pt-10 lg:pt-0 flex flex-col justify-center items-center w-full max-sm:min-h-[100vh] min-h-[95vh] bg-[black] " 
        style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url("\images\decorative-upholstery-soft-gloss-quilted-600nw-1242012145.webp")', 
            backgroundSize: 'cover',  
            backgroundPosition: 'center center', 
            backgroundRepeat: 'no-repeat',  
            backgroundAttachment: 'fixed '}}
        >
            <div className="px-5 sm:px-10 max-sm:pt-10 ">
                <div className="flex justify-center items-center lg:mb-10 opacity:1">
                    <img src="https://www.tooryanaad.org/img/logo/imgTyW.png" alt="" className="w-[20rem] xl:w-[30rem] lg:m-2" />
                </div>

                <div className="font-bold text-yellow-500 text-xl sm:text-3xl text-center mt-2"> हिंदी हैं हम </div>
                <div className=" flex justify-center items-center "> 
                    <p  className = "text-gray-300 py-5 text-lg sm:text-2xl font-semibold min-[500px]:w-3/4 lg:w-1/2 leading-10 text-center xl:leading-loose"> 
                        <span className="text-yellow-500">उद्देश्य - </span>
                        राजभाषा हिन्दी व भारतीय संस्कृति के प्रचार-प्रसार द्वारा देशवासियों में राष्ट्रगौरव व आत्मगौरव की भावना का विकास करना।
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UpperFront;