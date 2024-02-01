import styled from 'styled-components'
import Navbar from '../../Navbar/Navbar.jsx';
import MainShowroom from './MainShowroom';
import Footer from '../../Footer';
import BasketPreview from '../../Basket/BasketPreview.jsx';
import { useState } from 'react';

export default function Showroom() {

  const [isBasketOpen, setIsBasketOpen] = useState(false);
  // const [basketItems, setBasketItems] = useState([]);

  const handleBasketClick = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  return (
    <ShowroomStyled>
      <Navbar handleBasketClick={handleBasketClick}/>
      { isBasketOpen && <BasketPreview/> }
      <MainShowroom/>
      <Footer/>
    </ShowroomStyled>
  )
}
const ShowroomStyled = styled.div`
  background: white;
  width: 100%;
  height: 100vh;
`
