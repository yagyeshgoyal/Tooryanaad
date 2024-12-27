import React from 'react';
import Dataset from './DatasetOfCurrMember';
import DetailsOfMember from './DetailsOfMember';


function Currentmember(){
    return (
        <div className='flex flex-col justify-center items-center gap-5 container mx-auto px-4 pb-4 pt-20 '>
            <div className='font-bold text-yellow-500 py-5 text-xl sm:text-3xl'>वर्तमान कार्यकारिणी समिति</div>
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
    )
}
export default Currentmember;