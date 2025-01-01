import React from "react";

function UpperFront({newpage}){
    console.log("in the top bar")
    
    return (
        <section className="fixed left-0 right-0 top-0 z-50 w-[100%]   text-yellow-500 py-2 sm:py-0 sm:bg-[rgba(30,30,30)] sm:shadow-[0_1px_5px_3px_rgba(0,0,0,0.6)]">
            
            <div className="innerWidth  flex justify-between items-center p-4 bg-[rgba(30,30,30)] max-sm:hidden">
                <div aria-current="page" className="px-4 font-bold text-2xl active" href="">तूर्यनाद समिति</div>
                <div className="flex gap-5 lg:gap-10 text-xl max-md:text-lg">
                    <a onClick = {()=>newpage(0)} className="hover:scale-110 active" role="button">मुख्य पृष्ठ</a>
                    <a onClick = {()=>newpage(1)} className="hover:scale-110" role="button">अतिथि</a>
                    <a onClick = {()=>newpage(2)} className="hover:scale-110" role="button">सदस्य</a> 
                    <a onClick = {()=>newpage(3)} className="hover:scale-110" role="button">प्रतियोगिताएँ</a>
                    <a onClick = {()=>newpage(4)} className="hover:scale-110 " role="button">वीथिका</a>
                </div>

                
            </div>

            <div className="w-[90%] justify-center items-between sm:hidden flex flex-col gap-1">
                <div className="flex justify-between items-center bg-[rgba(30,30,30)] p-4 rounded-lg shadow-sm shadow-yellow-600 transform : none" tabindex="0">
                    <div className="pl-4 font-semibold text-lg">तूर्यनाद समिति</div>
                    <div className="hamburger-react  cursor: pointer height: 48px position: relative transition: 0.4s_cubic-bezier(0, 0, 0, 1) user-select: none width: 48px outline: none transform: none" aria-expanded="false" role="button" tabindex="0" >
                        <div style= {{background: 'currentcolor', height: '2px', left: '12px', position: 'absolute', width: '25px', top: '15px', transition: '0.4s cubic-bezier(0, 0, 0, 1)', transform: 'none'}}></div>
                        <div style= {{background: 'currentcolor', height: '2px', left: '12px', position: 'absolute', width: '25px', top: '23px', transition: '0.4s cubic-bezier(0, 0, 0, 1)', transform: 'none'}}></div>
                        <div style= {{background: 'currentcolor', height: '2px', left: '12px', position: 'absolute', width: '25px', top: '31px', transition: '0.4s cubic-bezier(0, 0, 0, 1)', transform: 'none'}}></div>
                        
                    </div>
                </div>
                <div className="flex flex-col items-center min-[480px]:w-1/2 min-[480px]:ml-auto"></div>
            </div>
            
        </section>
        
    );
}

export default UpperFront;