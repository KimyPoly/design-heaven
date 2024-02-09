import { useState } from 'react'
import styled from 'styled-components'
import BasketItems from './BasketItems'

export default function BasketPreview({basketItems, onAddToBasket}) {

  //etat du panier
  const [basket, setBasket] = useState(basketItems)

  // MAJ du panier
  const updateBasket = (newBasket) => {
    setBasket(newBasket)
  }

  return (
    <BasketPreviewStyled onAddToBasket={(item) => onAddToBasket(item, updateBasket)}>
      <p>Your basket</p>
      {basket.length > 0 ? (
       <BasketItems basket={basket}/>
      ) : (
        <p>I am empty ! </p>
      )}
    </BasketPreviewStyled>
  )
}
const BasketPreviewStyled = styled.div`
  background: white;
  height: 55vh;
  width: 40vh;
  position: absolute;
  right: 0;
  z-index: 1;
  border-radius: 50px;
  text-align: center;
  font-family: 'Noto Serif', serif;
  border: 2px double #f27e56;
`
