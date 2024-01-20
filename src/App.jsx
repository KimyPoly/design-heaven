import './App.css'
import Home from './components/pages/Home/Home'
import { Route, Routes } from "react-router-dom";
import Showroom from './components/pages/Showroom/Showroom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/showroom" element={<Showroom/>}/>
    </Routes>

  )
}

export default App
