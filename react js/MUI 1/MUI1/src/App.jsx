import { Route, Routes } from "react-router-dom"
import Home from "./components/MUI/Home"
import Header from "./components/MUI/Header"
import Cards from "./components/MUI/Cards"
import Papers from "./components/MUI/Papers"
import Tables from "./components/MUI/Tables"
function App() {

  return (
    <>
    <Routes>
      <Route path="/Cards" element={<Cards/>}/>
    <Route path="/" element={<Header/>} />
    <Route path="/Home" element={<Home/>}/>
    <Route path="/paper" element={<Papers/>}/>
    <Route path="/Table" element={<Tables/>}/>
    </Routes>
    </>
  )
}

export default App
