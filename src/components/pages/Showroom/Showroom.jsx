import styled from 'styled-components'
import Navbar from '../../Navbar/Navbar.jsx';
import MainShowroom from './MainShowroom';
import Footer from '../../Footer';
import BasketPreview from '../../Basket/BasketPreview.jsx';
import { useState } from 'react';
import { useBasket } from '../../../hooks/useBasket.jsx';

export default function Showroom() {

  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [basketItems, setBasketItems] = useState([]);
  // const [basket] = useBasket()

  const handleBasketClick = () => {
    setIsBasketOpen(!isBasketOpen);
  }

  const handleAddToBasket = (item) => {
    setBasketItems([...basketItems, item]);
  }

  return (
    <ShowroomStyled>
      <Navbar handleBasketClick={handleBasketClick}/>
      { isBasketOpen && <BasketPreview basketItems={basketItems}/> }
      <MainShowroom onAddToBasket={handleAddToBasket}/>
      <Footer/>
    </ShowroomStyled>
  )
}
const ShowroomStyled = styled.div`
  background: white;
  width: 100%;
  height: 100vh;
`
