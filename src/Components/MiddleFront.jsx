import React from "react";
import images1 from './images/1.jpeg';
import images2 from './images/2.jpeg';
import images3 from './images/3.jpg';
import images4 from './images/4.jpg';
import images5 from './images/5.jpg';
import images6 from './images/6.jpg';
import bgimages from './images/bg.jpg';

function MiddleFront(){
    return (
        <div className="py-10 flex flex-col max-sm:flex-col-reverse gap-5 justify-center items-center"
        style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url({bgimages})',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}>
            <div >
                <div className="grid grid-cols-2 md:grid-cols-4 my-5 justify-center gap-x-10 gap-y-10 lg:gap-10 text-white px-10 rounded-lg py-5 border border-yellow-500 shadow-md shadow-yellow-300 items-center bg-gray-700 bg-opacity-50">
                    <div>
                        <div className="text-2xl max-[500px]:text-md text-yellow-500 text-center">
                            <span>3,900+</span>
                        </div>
                        <div className="text-center text-xl max-[500px]:text-sm font-bold">इंस्टाग्राम</div>
                    </div>

                    <div>
                        <div className="text-2xl max-[500px]:text-md text-yellow-500 text-center">
                            <span>20,000+</span>
                        </div>
                        <div className="text-center text-xl max-[500px]:text-sm font-bold">फेसबुक</div>
                    </div>

                    <div>
                        <div className="text-2xl max-[500px]:text-md text-yellow-500 text-center">
                            <span>3,500+</span>
                        </div>
                        <div className="text-center text-xl max-[500px]:text-sm font-bold">यूट्यूब</div>
                    </div>

                    <div>
                        <div className="text-2xl max-[500px]:text-md text-yellow-500 text-center">
                            <span>800+</span>
                        </div>
                        <div className="text-center text-xl max-[500px]:text-sm font-bold">ट्विटर</div>
                    </div>
                </div>
            </div>



            <div className="responsive-container-block Container">
                <div className="responsive-container-block rightSide opacity: 1 transform: none">
                    <img src={images1} alt="" className="mt-[39%] mr-[80%] mb-[29%] ml-[0%] max-w-[100%] h-[32%] w-[40%] absolute shadow-[-10px_-10px_10px_#000] rounded-[10px] block align-middle"/>
                    <img src={images2} alt="" className="mt-[19%] mr-[42%] mb-[42%] ml-[23%] max-w-[100%] h-[39%] w-[50%] absolute shadow-[0px_-10px_15px_#000] rounded-[10px] block align-middle"/>
                    <img src={images3} alt="" className="mt-[70%] mr-[90%] mb-[20%] ml-[5%] max-w-[100%] h-[30%] w-[40%] absolute shadow-[10px_10px_15px_#000] rounded-[10px] block align-middle"/>
                    <img src={images4} alt="" className="mt-[70%] mr-[10%] mb-[5%] ml-[73%] max-w-[100%] h-[30%] w-[40%] absolute shadow-[10px_10px_15px_#000] rounded-[10px] block align-middle"/>
                    <img src={images5} alt="" className="mt-[40%] mr-[0px] mb-[18%] ml-[75%] max-w-[100%] h-[30%] w-[40%] absolute shadow-[10px_10px_10px_#000] rounded-[10px] block align-middle"/>
                    <img src={images6} alt="" className="mt-[0px] mr-[20%] mb-[67%] ml-[62%] max-w-[100%] h-[40%] w-[50%] absolute shadow-[10px_10px_10px_#000] rounded-[10px] block align-middle"/>
                    {/* <img src={images6} alt="" /> */}
                    
                </div>

                <div className="responsive-container-block leftSide">
                    <p className="text-blk heading">तूर्यनाद</p>
                    <p className="text-md min-[400px]:text-lg max-sm:p-7 max-sm:text-center md:text-xl text-white ">तूर्यनाद भारत का सबसे बड़ा अन्तर-महाविद्यालयीन हिन्दी महोत्सव है, जिसका आयोजन प्रतिवर्ष मौलाना आज़ाद राष्ट्रीय प्रौद्योगिकी संस्थान की तूर्यनाद समिति द्वारा किया जाता है। इसके अन्तर्गत महाविद्यालयीन विद्यार्थियों हेतु अनेक राष्ट्रीय स्तर की प्रतियोगिताएँ, सांस्कृतिक कार्यक्रम, तकनीकी कार्यशालाएँ, अतिथि परिचर्चा, कवि सम्मेलन आदि कार्यक्रम आयोजित किए जाते हैं। कार्यक्रम भारतीय भाषाओं के तकनीकी समन्वय व संवर्धन की ओर भी कार्यरत है एवं राजभाषा हिन्दी का औपचारिकता से परे जीवन में सम्मान के साथ उपयोग व प्रचार-प्रसार करने का द्योतक है। समिति, राजभाषा हिन्दी व भारतीय संस्कृति के प्रचार-प्रसार द्वारा देशवासियों में राष्ट्रगौरव एवं आत्मगौरव के भाव को जागृत करने के ध्येय से विगत 9 वर्षों से कार्यरत है।</p>
                </div>
            </div>
        </div>
    );
}


export default MiddleFront;