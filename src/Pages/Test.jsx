import React, { useEffect, useState } from 'react'
import AllData from "../Data/Data"
import QuestionCard from '../Component/QuestionCard';
import Arrow from '../assets/Arrow.svg';
import ArrowWhite from '../assets/ArrowWhite.svg';
import { DataStore } from '../store/DataStore';
import { useNavigate } from 'react-router-dom';



export default function Test() {
    const TotalQuestion = AllData.length;
    const [no, setNo] = useState(0);
    const navigate = useNavigate()
    const answers = DataStore((state) => state.answers);
    const [countdown, setCountdown] = useState(30);
    
    function handleNext(){
        if(no+1 == TotalQuestion){
            navigate('/result');
        }
        setCountdown(30);         
        setNo(no+1);
    }
    
    useEffect(() => {
        if (countdown === 0) {
          handleNext();
          setCountdown(30);         
          return;
        }

        const timer = setTimeout(() => {
          setCountdown(prev => prev - 1);
        }, 1000);
    
        return () => clearTimeout(timer);
      }, [countdown]);

    
    
    return (
        <div className='min-h-screen bg-[#f8f8f8] flex justify-center items-center'>
            <div className='bg-[#ffffff] rounded-xl md:h-[650px] w-full lg:w-[975px] p-[40px]'>
                <div className='flex justify-between'>
                    <div className='w-[36px] h-[26px] text-[#616464] font-semibold text-[24px]'>0:{countdown < 10 ? "0" : ""}{countdown}</div>
                    <div onClick={()=>navigate('/result')} className='cursor-pointer w-[76px] h-[44px] rounded-xl text-[18px] border-1 text-[#414343] border-black flex justify-center items-center'>Quite</div>
                </div>
                <div className='mt-[32px] flex justify-between'>
                    {
                        Array(TotalQuestion).fill(0).map((ele, key) => (
                            <div className={`h-[4px] w-full rounded-2xl ${key < no ? "bg-[#F2A531]" : "bg-[#DFE3E3]"} mx-1`} key={key}>
                            </div>
                        ))
                    }
                </div>
                <div className='md:h-[434px] w-full  mt-6 md:mt-14 flex flex-col items-center'>
                    <p className='text-[#616464] text-[15px] md:text-[20px] font-semibold'>Select the missing words in the correct order</p>
                    <div className='w-full flex justify-center'>
                        <QuestionCard Data={AllData[no]} no={no} />
                    </div>
                    <div className=' h-[64px] w-full flex justify-end'>
                        {answers?.[no]?.["available"].length != 0 && no < TotalQuestion - 1 ? 
                        <div className='border-[#DFE3E3] border-2 cursor-pointer rounded-2xl h-[64px] w-[64px] flex items-center justify-center'>
                            <img src={Arrow} className='h-[16px] w-[16px]' alt="Next"/>
                        </div> :
                        <div onClick={()=>handleNext()} className='border-[#453FE1] bg-[#453FE1] border-2 cursor-pointer rounded-2xl h-[64px] w-[64px] flex items-center justify-center'>
                            <img src={ArrowWhite} className='h-[16px] w-[16px] ' alt="Next"/>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
