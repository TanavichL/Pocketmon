import { useState} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import AddPocket from "./pages/AddPocket"
import Dashboard from "./pages/Dashboard"
import Pocket from "./pages/Pocket"
import Withdraw from "./pages/Withdraw"
import Profile from "./pages/Profile"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>  
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/SignIn" element={<SignIn />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/AddPocket" element={<AddPocket />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/Pocket" element={<Pocket />} />
        <Route exact path="/Withdraw" element={<Withdraw />}/>
        <Route exact path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
