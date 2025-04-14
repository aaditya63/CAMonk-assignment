# CA Monk Assignment Documentation

### Intro
Hello, My name is Aaditya Sah and i'm a MERN Stack | Software Developer,.. i m submiting my Assignment

## Documentation

### Tech Used
Web development : React, Vite, TailwindCSS </br>
State Management : Zustand 

### Dummy Data Replacement
Just we have to get data from API and it will modify everything accordingly,..

i have used dummy data as 
```bash
const Data = [
    {
        question:"asdf asddf assdf asdf asdf </> qwer qwer qwer </> asdf asdf asdf asdf </> qwer qwer qwer </> asdf.",
        answer:["A","B","C","D"],
        random:["C","D","A","B"]
    },
    {
        question:"asdf asddf assdf asdf asdf </> qwer qwer qwer </> asdf asdf asdf asdf </> qwer qwer qwer </> asdf.",
        answer:["A","B","C","D"],
        random:["C","D","A","B"]
    },
]
```
Here,.. we can get data from backend and parse into like this,.. It has array of n numbers,.. based on numbers of data or Questions </b> 

Further it has questions String where
``` </>``` are placed where we are showing input box dynamically,.. </br>
answer - Right Options at their places
random - order in which options will be displayed

### Folder Structure
```bash
src/
│
├── components/
│   ├── QuestionCard.jsx  -- Used in Test Page,.. to render different Questions
│   ├── PromtCard.jsx     -- Used in Result Page,.. to render different Promts response
│
├── pages/
│   ├── Home.jsx          -- Main Page where user can start test
│   ├── Test.jsx          -- Test Page
│   ├── Result.jsx        -- Result Page
│
├── assets/               -- Containing all the SVGs assets
│
├── store/
│   ├── DataStore.jsx     -- State Management File with Zustand
│
├── Data/
│   ├── Test.js           -- Dummy Question Data
│   ├── Promt.js          -- Dummy Promt Response
│
├── App.jsx
└── index.js
```


