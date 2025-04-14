import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AllData from "../Data/Data"
import { DataStore } from '../store/DataStore';
import ScrollDown from '../assets/scroll-down.svg';

import AllPromt from '../Data/Promt';
import PromtCard from '../Component/PromtCard';
import { useNavigate } from 'react-router-dom';


export default function Result() {
  const [percentage, setPercentage] = useState(0);
  const answers = DataStore((state) => state.answers);
  const totalQuestion = AllData.length;
  const totalPromt = AllPromt.length;
  const navigate = useNavigate()

  function gotoDashboard() {
    navigate('/');
    window.location.reload();
  }

  useEffect(() => {
    let total = 0;
    let right = 0;
    for (let i = 0; i < totalQuestion; i++) {
      const op = AllData[i]['answer'].length;
      for (let j = 0; j < op; j++) {
        if (AllData[i]['answer'][j] == answers[i]?.['choosen']?.[j]) {
          right++;
        }
        total++;
      }
      console.log("right is ", right, " total is ", total)
      setPercentage((right / total) * 100)
    }
  }, [])
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full gap-16 xxs:h-[40px] lg:h-[64px] lg:text-[28px] flex justify-around bg-[#F8F8F8] backdrop-blur-[50px] shadow-[0px_2px_36px_0px_#00000014]">
        <div className="lg:w-[136px]">
        </div>
        <div className="text-[#414343] flex justify-center items-center">
          <p>Sentence Construction</p>
        </div>
        <div className="lg:w-[136px] flex items-center justify-end">
          <BsThreeDotsVertical className="md:text-[28px] cursor-pointer" />
        </div>
      </div>
      <div className="bg-[#f8f8f8f8] flex justify-center">
        <div className='mt-5 md:mt-32 w-full md:w-[743px]'>

          <div className="relative w-[144px] mx-auto ">
            <CircularProgressbar
              value={percentage}
              styles={buildStyles({
                pathColor: "#317F39",
                trailColor: "transparent",
              })}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className=" font-semibold text-[#317F39] text-[52px]">{percentage}</div>
              <div className="text-[#317F39] text-[15px] font-semibold">OverAll Score</div>
            </div>
          </div>

          <p className='text-[16px] px-5 md:px-0 md:text-[18px] mt-[10px] text-[#2A2D2D] text-center'>While you correctly formed several sentences, there are a couple of areas where improvement is needed. Pay close attention to sentence structure and word placement to ensure clarity and correctness. Review your responses below for more details.</p>

          <div onClick={() => gotoDashboard()} className=' cursor-pointer h-[54px] w-[270px] mx-auto mt-[40px] md:mt-[90px] rounded-2xl text-[16px] text-[#453FE1] flex items-center justify-center border-1 border-[#453FE1]'>Go to Dashboard</div>
          <div className='h-[56px] w-fit mx-auto'>
            <img src={ScrollDown} alt="" className='mt-[6px] md:mt-[16px]' />
          </div>
          <div className='px-[5px] w-full md:w-[700px]'>
            {
              AllPromt.map((promt, key) => {
                return (
                  <PromtCard promt={promt} no={key} totalPromt={totalPromt} key={key} />)
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
