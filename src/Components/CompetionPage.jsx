import React from "react";
import CompetionImageContainer from "./CompetionImageContainer";

function CompetionPage(){
    return (
        <div className="md:mt-14">
            <div className="w-full flex justify-center items-center">
                <div className="max-w-[1200px] flex flex-col items-center gap-5 mx-auto px-4 mt-24 mb-5 ">
                    <div className="font-bold text-yellow-500 text-xl sm:text-3xl">प्रतियोगिता पृष्ठ</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        <CompetionImageContainer image="https://www.tooryanaad.org/gallery/FB_IMG_1680860270167.jpg" name="कवि सम्मेलन" position="अधिक जानें" ></CompetionImageContainer>
                        <CompetionImageContainer image="" name="अभिव्यक्ति गायन" position="अधिक जानें" ></CompetionImageContainer>
                        <CompetionImageContainer image="" name="चक्रव्यूह" position="अधिक जानें" ></CompetionImageContainer>
                        <CompetionImageContainer image="" name="सृजन" position="अधिक जानें" ></CompetionImageContainer>
                        <CompetionImageContainer image="" name="डिजिटल सृजन" position="अधिक जानें" ></CompetionImageContainer>
                        <CompetionImageContainer image="" name="अभिव्यक्ति मंच" position="अधिक जानें" ></CompetionImageContainer>
                        <CompetionImageContainer image="" name="अभिव्यक्ति नृत्य" position="अधिक जानें" ></CompetionImageContainer>
                        <CompetionImageContainer image="" name="परिधानिका" position="अधिक जानें" ></CompetionImageContainer>
                        <CompetionImageContainer image="" name="भाषा संगमम्" position="अधिक जानें" ></CompetionImageContainer>
                        <CompetionImageContainer image="" name="छात्र संसद" position="अधिक जानें" ></CompetionImageContainer>
                        <CompetionImageContainer image="" name="खिचड़ी" position="अधिक जानें" ></CompetionImageContainer>
                        <CompetionImageContainer image="" name="लेखन" position="अधिक जानें" ></CompetionImageContainer>
                        <CompetionImageContainer image="" name="नुक्कड़ नाटक" position="अधिक जानें" ></CompetionImageContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompetionPage;