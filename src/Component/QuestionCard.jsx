import React, { useEffect, useState } from 'react'
import { DataStore } from '../store/DataStore';

export default function QuestionCard({ Data: Data, no: no }) {
    const answers = DataStore((state) => state.answers);
    const initiateOption = DataStore((state) => state.initiateOption);
    const setOption = DataStore((state) => state.setOption);
    const removeOption = DataStore((state) => state.removeOption);


    const [random, setRandom] = useState([...Data?.random]);
    const [ready, setReady] = useState(false);
    const PArray = Data.question.split('</>')

    function InputFeild({ pos }) {
        return (
            <span className='inline-block'>
                {answers?.[no]?.["choosen"]?.[pos] === undefined ?
                    <div className='w-[97px] h-[42px] border-b-1 inline-flex justify-center items-center'>
                    </div>
                    :
                    <div className='relative w-[97px] h-[42px] border-b-1 inline-flex justify-center items-end'>
                        <div className='absolute rounded-xl border-2 border-[#BFC6C6] text-[#414343]  cursor-pointer w-full h-[30px] mb-[1px] text-[16px] inline-flex justify-center items-center' onClick={() => RemoveOption(pos)}> {answers?.[no]?.["choosen"]?.[pos]}</div>
                    </div>
                }
            </span>
        )
    }

    function RemoveOption(pos) {
        const text = answers?.[no]?.["choosen"]?.[pos]
        removeOption(text, no, pos);
    }

    function ChooseOption(text) {
        const choosen = answers?.[no]?.choosen;
        if (!choosen) return;

        let idx = 0;
        for (let i = 0; i < choosen.length; i++) {
            if (choosen[i] === undefined) {
                idx = i;
                break;
            }
        }
        console.log("Function Called! and IDX is ", idx);
        setOption(text, no, idx);
    }
    useEffect(() => {
        initiateOption(Data.random, no);
        setReady(true)
    }, [no])
    return (
        <div className='w-[811px]'>
            <div>
                {
                    PArray.map((text, key) => (
                        <span key={key} className='h-[42px]'>
                            <span className='text-[24px] text-[#2A2D2D] font-semibold' key={key + 100}>{text}</span>
                            {key < PArray.length - 1 && <InputFeild key={key + 500} pos={key} />}
                        </span>
                    ))
                }
            </div>
            <div className='mt-40 flex gap-[16px] justify-center h-[40px]'>
                {
                    random.map((text, key) => (
                        <div className={`cursor-pointer ${answers?.[no]?.["available"].includes(text) ? "":"invisible"} text-[16px] font-semibold h-[38px] rounded-xl border-2 px-[12px] border-[#BFC6C6] text-[#414343] flex items-center justify-center `} onClick={() => ChooseOption(text)} key={key}>{text}</div>
                    ))
                }
            </div>
        </div>
    )
}
