import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage"
import Register from "./components/Auth/Register"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
        <Route path="/register" element={<Register />} />
    </Routes>
    </>
  )
}

export default App;
