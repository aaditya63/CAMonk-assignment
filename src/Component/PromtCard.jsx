import React, { useEffect } from 'react'

export default function PromtCard({promt,no,totalPromt}){
    return (
    <div className={`w-full my-[60px] rounded-2xl ${ promt.status == "Correct" ?"shadow-[0px_0px_70px_rgba(66,169,76,0.1)]":"shadow-[0px_0px_70px_rgba(255,0,0,0.1)]"} `}>
        <div className='bg-[#FFFFFF] rounded-t-2xl'>
            <div className='flex justify-between pt-[24px] px-[24px] h-24px'>
                <div className='text-[#616464] text-[14px] bg-[#F0F0F0] p-1 rounded-2xl'>
                Prompt
                </div>
                <div className='text-[14px] '>
                    {no+1}<span className='text-[#7C8181]'>/{totalPromt}</span>
                </div>
            </div>

            <div className='p-[8px] m-[20px]'>
                <p className='text-[16px] text-[#414343]'>{promt?.question}</p>
            </div>
        </div>
        <div className='bg-[#F6F9F9] rounded-b-2xl p-[16px]'>
            <div>
                Your Response <span className={`rounded-xl p-1 ${promt.status == "Correct" ? "bg-[#EEFBEF] text-[#317F39]" : "bg-[#FCEBEC] text-[#9E2930]"}`}>{promt.status}</span>
            </div>
            <div className='p-[8px] mt-[10px]'>
                <p className='text-[18px] text-[#2A2D2D]'>{promt?.answer}</p>
            </div>
        </div>
    </div>
  )
}
