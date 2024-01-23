import './App.css'
import Home from './components/pages/Home/Home'
import { Route, Routes } from "react-router-dom";
import Showroom from './components/pages/Showroom/Showroom';
import ItemDetails from './components/pages/ItemDetails/ItemDetails';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/showroom" element={<Showroom/>}/>
      <Route path='/furnitures/:id' element={<ItemDetails/>}/>
    </Routes>

  )
}

export default App
