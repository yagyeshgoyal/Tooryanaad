import React from "react";
import CompetionImageContainer from "./CompetionImageContainer";
import Dataset from "./DatasetOfCompetetion"; 

function CompetionPage(){
    return (
        <div className="md:mt-14">
            <div className="w-full flex justify-center items-center">
                <div className="max-w-[1200px] flex flex-col items-center gap-5 mx-auto px-4 mt-24 mb-5 ">
                    <div className="font-bold text-yellow-500 text-xl sm:text-3xl">प्रतियोगिता पृष्ठ</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                        {
                            Dataset.map(items =>{
                                return (
                                    <CompetionImageContainer detail = {items} ></CompetionImageContainer>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompetionPage;