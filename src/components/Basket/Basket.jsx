import styled from 'styled-components'
import { CiShoppingCart } from "react-icons/ci";


export default function Basket({handleBasketClick}) {
  return (
    <BasketStyled>
      <CiShoppingCart onClick={handleBasketClick}/>
    </BasketStyled>
  )
}
const BasketStyled = styled.div`
 position: absolute;
 right: 0;
 color: white;
 cursor: pointer;

 svg {
  font-size: 1.5em;
 }

`
