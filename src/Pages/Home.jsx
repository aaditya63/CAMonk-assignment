import { BsThreeDotsVertical } from "react-icons/bs"
import Logo from '../assets/logo.svg';
import Line from '../assets/Line.svg';
import Ellipse from '../assets/Ellipse15.svg';
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate()

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
      <div className="flex-1 bg-[#f8f8f8f8] flex justify-center items-center">
        <div className="h-[472px] xxs:w-full  md:w-[627px] flex flex-col items-center p-5">
          <img src={Logo} alt="here" className="h-[72px] w-[72px]" />
          <p className="w-full xxs:text-[30px] md:text-[40px] h-[46px] mt-[32px] flex items-center justify-center text-[#0F1010] font-bold">Sentence Construction</p>
          <p className="text-center h-[56px] mt-[12px] text-[#7C8181] text-wrap">
            Select the correct words to complete the sentence by arranging the provided options in the right order.
          </p>
          <div className="mt-[32px] h-[32px] w-full">
            <div className="flex items-center justify-between w-full">
              <div className="text-center w-[171px]">
                <p className="h-[28px] text-[20px]">Time Per Question</p>
                <p className="h-[28px]  xxs:mt-[35px] md:mt-[16px] text-[18px] text-[#7C8181]">30 sec</p>
              </div>
              <img src={Line} alt="" className="h-[54px]" />
              <div className="text-center w-[161px]">
                <p className="h-[28px] text-[20px]">Total Questions</p>
                <p className="h-[28px] xxs:mt-[35px] md:mt-[16px] text-[18px] text-[#7C8181]">10</p>
              </div>
              <img src={Line} alt="" className="h-[54px]" />
              <div className="text-center w-[161px]">
                <p className="h-[28px] text-[20px]">Coins</p>
                <p className="h-[28px] xxs:mt-[35px] md:mt-[16px] text-[18px] text-[#7C8181] flex justify-center"><img src={Ellipse} alt="" className="w-[16px] h-16px" />10</p>
              </div>
            </div>
          </div>
          <div className="xxs:mt-[70px] md:mt-[50px] w-full flex justify-center">
            <div className="flex gap-[16px]">
              <div className="h-[42px] w-[140px] border-2 rounded-xl text-[#453FE1] flex items-center justify-center cursor-pointer border-[#453FE1]">
                Back
              </div>
              <div onClick={()=>navigate('/test')} className="h-[42px] w-[140px] border-2 rounded-xl text-white bg-[#453FE1] flex items-center justify-center cursor-pointer border-[#453FE1]">
                Start
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home
