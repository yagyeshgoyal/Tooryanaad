import React from 'react';
import Dataset from './DatasetOf22Member';
import Dataset2 from './DatasetOf23Member';
import DetailsOfMember from './DetailsOfMember';


function PastMember(){
    return (
        <div className='flex flex-col justify-center items-center gap-5 container mx-auto px-4 pb-4 pt-20 '>
            <div className='font-bold text-yellow-500 py-5 text-xl sm:text-3xl'>पूर्व सदस्य</div>
            
            <div className='flex flex-col justify-center items-center gap-5 container mx-auto px-4 pt-4 '>
                <div className='font-bold text-yellow-500 text-lg sm:text-xl'>तूर्यनाद'22 सदस्य</div>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {
                        Dataset.map(member =>{
                            return(
                                <DetailsOfMember detail = {member}></DetailsOfMember>
                            )
                        })
                    }
                </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-5 container mx-auto px-4 pt-10 '>
                <div className='font-bold text-yellow-500 text-lg sm:text-xl'>तूर्यनाद'23 सदस्य</div>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {
                        Dataset2.map(member =>{
                            return(
                                <DetailsOfMember detail = {member}></DetailsOfMember>
                            )
                        })
                    }
                </div>
            </div>
           
        </div>
    )
}
export default PastMember;