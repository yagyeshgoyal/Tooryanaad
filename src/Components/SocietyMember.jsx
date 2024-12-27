import React from 'react';
import Founder from './Founders';
import Currentmember from './Currentmember';

function SocietyMember(){
    return (
        <div className='md:mt-14'>
            <div className='flex flex-col items-center gap-5 mx-auto px-4 mt-24 mb-5 '>
                <div className='font-bold text-yellow-500 text-xl sm:text-3xl'>समिति सदस्य</div>

                <div className='relative inline-block text-left max-[400px]:w-[70vw] w-[55vw] lg:w-[30vw] xl:w-[20vw]'>
                    <div>
                        <button type='button' className='inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-bold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'>
                            "सभी सदस्य"
                            <svg className='-mr-1 ml-2 h-5 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule = "evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <Founder/>
                <Currentmember/>

                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default SocietyMember;