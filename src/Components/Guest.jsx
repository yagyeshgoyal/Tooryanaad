import React from "react";
import ImageContainer from "./ImageContainer";
// import images2 from './images/2.jpeg';
// import image from './images/bhooribai.jpg'

function Guest(){
    return (
        <div className="md:mt-14 ">
            <div className="max-w-[1200px] flex flex-col items-center gap-5 mx-auto px-4 py-4 mt-20">
                <div className="font-bold text-yellow-500 text-xl sm:text-3xl">अतिथि पृष्ठ</div>

                <div className="font-bold text-yellow-500 text-xl py-6 sm:text-2xl">2023</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 flex w-full justify-center">
                    <ImageContainer  image = "https://www.tooryanaad.org/guest/2023/bhooribai.jpg" name = "श्रीमती भूरी बाई" position = "मुख्य अतिथि" ></ImageContainer>
                    <ImageContainer image = "/bhooribai.jpg" name = "डॉ. हरिओम पवार" position = "मुख्य कवि"></ImageContainer>
                </div>




                <div className="font-bold text-yellow-500 text-xl py-6 sm:text-2xl">2022</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 flex w-full justify-center">
                    <ImageContainer image = "image" name = "श्री रघुबीर यादव" position = "मुख्य अतिथि"></ImageContainer>
                    <ImageContainer image = "image" name = "श्री ऋतेश गोयल आर्य" position = "मुख्य वक्ता"></ImageContainer>
                    <ImageContainer image = "image" name = "श्री तरुण कुमार पिथोड़े" position = "विशिष्ट अतिथि"></ImageContainer>
                    <ImageContainer image = "image" name = "श्रीमती अंकिता सिंह राठौर" position = "मुख्य कवयित्री"></ImageContainer>
                </div>



                <div className="font-bold text-yellow-500 text-xl py-6 sm:text-2xl">2021</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 flex w-full justify-center">
                <ImageContainer image = "image" name = "ज्योतिरादित्य माधवराव सिंधि" position = "प्रसिद्ध राजनीतिज्ञ"></ImageContainer>
                <ImageContainer image = "image" name = "विनय प्रभाकर सहस्रबुद्धे" position = "प्रसिद्ध राजनीतिज्ञ"></ImageContainer>
                <ImageContainer image = "image" name = "प्रो. एच. सी. वर्मा" position = "पद्मश्री पुरस्कार प्राप्त, भौतिक विज्ञान के पूर्व प्राध्यापक, आई.आई.टी. कानपुर, व लेखक"></ImageContainer>
                <ImageContainer image = "image" name = "श्री चेतन सिंह सोलंकी" position = "प्राध्यापक, आई.आई.टी. मुम्बई, संस्थापक- एनर्जी स्वराज यात्रा"></ImageContainer>
                <ImageContainer image = "image" name = "श्री पी. नरहरि" position = "सचिव, सूक्ष्म, लघु, एवं मध्यम उद्यम विभाग (म.प्र. शासन)"></ImageContainer>
                <ImageContainer image = "image" name = "हिमानी शिवपुरी जी" position = "प्रसिद्ध अभिनेत्री"></ImageContainer>
                </div>




                <div className="font-bold text-yellow-500 text-xl py-6 sm:text-2xl">2020</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 flex w-full justify-center">
                    <ImageContainer image = "image" name = "श्री प्रहलाद सिंह  टिपानिया" position = "पद्मश्री प्राप्त लोक कलाकार"></ImageContainer>
                    <ImageContainer image = "image" name = "प्रो.नंदकिशोर पांडेय जी" position = "हिंदी विभाग, राजस्थान विश्वविद्यालय, जयपुर "></ImageContainer>
                    <ImageContainer image = "image" name = "श्री प्रदीप द्विवेदी जी" position = "आई.ए.एस. "></ImageContainer>
                    <ImageContainer image = "image" name = "श्री नारायण चौधरी जी" position = "सहायक निर्देशक, भारतीय भाषा संस्थान ,मैसूर "></ImageContainer>
                    <ImageContainer image = "image" name = "श्री  ललित कुमार जी" position = "लेखक, संस्थापक-कविता कोश एवं गद्य कोश"></ImageContainer>
                    <ImageContainer image = "image" name = " श्रीमती  कविता तिवारी जी " position = " प्रख्यात कवयित्री"></ImageContainer>
                    <ImageContainer image = "image" name = "डॉ.  चिन्मय पंडया  जी" position = " प्रतिकुलपति, देव संस्कृति विश्वविद्यालय "></ImageContainer>
                    <ImageContainer image = "image" name = "श्री राहुल देव जी" position = "वरिष्ठ पत्रकार एवं भाषाविद्"></ImageContainer>
                </div>




                <div className="font-bold text-yellow-500 text-xl py-6 sm:text-2xl">2019</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 flex w-full justify-center">
                    <ImageContainer image = "image" name = "श्री अखिलेंद्र मिश्रा जी" position = "प्रख्यात सिनेमा अभिनेता"></ImageContainer>
                    <ImageContainer image = "image" name = "श्री वेद प्रताप वैदिक जी" position = "वरिष्ठ पत्रकार, राजनैतिक  विश्लेषक, पटु  वक्ता "></ImageContainer>
                    <ImageContainer image = "image" name = "श्री तरुण कुमार पिथोड़े जी" position = "कलेक्टर, भोपाल "></ImageContainer>
                </div>




                <div className="font-bold text-yellow-500 text-xl py-6 sm:text-2xl">2018</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 flex w-full justify-center">
                    <ImageContainer image = "image" name = "श्री मनोज श्रीवास्तव जी" position = "प्रमुख  सचिव, संस्कृति विभाग (म.प्र. शासन)"></ImageContainer>
                    <ImageContainer image = "image" name = "श्रीमती  अंजना झा जी" position = "अंतराष्ट्रीय कथक नृत्यांगना"></ImageContainer>
                </div>



                <div className="font-bold text-yellow-500 text-xl py-6 sm:text-2xl">2017</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 flex w-full justify-center">
                    <ImageContainer image = "image" name = "श्री अमन अक्षर जी" position = "प्रसिद्ध कवि "></ImageContainer>
                    <ImageContainer image = "image" name = "श्री संक्रांत सानु" position = "संस्थापक- गरुड़ प्रकाशन व लेखक"></ImageContainer>
                    <ImageContainer image = "image" name = "श्री विवेक अग्निहोत्री" position = "निर्माता, निर्देशक"></ImageContainer>
                </div>




                <div className="font-bold text-yellow-500 text-xl py-6 sm:text-2xl">2016</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 flex w-full justify-center">
                    <ImageContainer image = "image" name = "आचार्य विद्यासागर महाराज" position = ""></ImageContainer>
                    <ImageContainer image = "image" name = "श्री जयभान सिंह पवैया" position = "पूर्व उच्च शिक्षा मंत्री म.प्र. शासन"></ImageContainer>
                    <ImageContainer image = "image" name = "श्री सीताशरण शर्मा" position = "पूर्व अध्यक्ष,म.प्र. विधानसभा"></ImageContainer>
                    <ImageContainer image = "image" name = "श्री मुकुल कानिटकर" position = "राष्ट्रीय सह संगठन मंत्री,भारतीय शिक्षक मंडल "></ImageContainer>
                    <ImageContainer image = "image" name = "स्व. श्री अनिल माधव दवे जी" position = " तत्कालीन केंद्रीय मंत्री "></ImageContainer>
                    <ImageContainer image = "image" name = "श्रीमती अनुराधा सिंह" position = " शास्त्रीय नृत्यांगना"></ImageContainer>
                    <ImageContainer image = "image" name = "श्री लाल सिंह आर्य" position = "राज्यमंत्री(स्वतंत्र प्रभार)"></ImageContainer>
                    <ImageContainer image = "image" name = "श्री मनोज जोशी " position = "प्रसिद्ध अभिनेता"></ImageContainer>
                    <ImageContainer image = "image" name = "श्रीमती  सुलेखा भट्ट" position = "गायिका"></ImageContainer>
                </div>




                <div className="font-bold text-yellow-500 text-xl py-6 sm:text-2xl">2015</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 flex w-full justify-center">
                    <ImageContainer image = "image" name = "श्री पीयूष मिश्रा जी" position = "लेखक,गायक,अभिनेता,संगीत निर्देशक व गीतकार"></ImageContainer>
                </div>



            </div>
        </div>
    );
}

export default Guest;