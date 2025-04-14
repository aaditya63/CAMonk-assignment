import { create } from 'zustand'

export const DataStore = create((set, get) => ({
    answers: [
    ],
    setOption: (text,no,place) => {
        const temp = [... get().answers];
        temp[no]["choosen"][place] = text;
        temp[no]["available"] = temp[no]["available"].filter(item => item !== text);
        set({answers:temp})
        console.log(get().answers)         
    },
    removeOption:  (text,no,place) => {
        const temp = [... get().answers];
        temp[no]["choosen"][place] = undefined;
        temp[no]["available"].push(text);
        set({answers:temp})   
        console.log(get().answers)         
      
    },
    initiateOption: (options,no) => {
        if(get().answers.length != no){
            return;
        }
        const arr = new Array(options.length).fill(undefined)
        const tempobject = {
            choosen: arr,
            available:options,
        }
        const temp = [... get().answers];
        temp.push(tempobject);
        set({answers:temp})
        console.log(get().answers)         
    },
}))



/*
answer = [
    {
        Choosen : [],
        Available : []
    }
]

*/