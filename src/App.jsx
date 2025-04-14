import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Test from "./Pages/Test"
import Result from "./Pages/Result"

function App() {

  return (

    <div>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Test/>} path="/test"/>
        <Route element={<Result/>} path="/result"/>

      </Routes>
    </div>

  )
}

export default App
