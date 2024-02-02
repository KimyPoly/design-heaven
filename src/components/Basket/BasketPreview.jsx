import { useState } from 'react';
import styled from 'styled-components'

export default function BasketPreview({basketItems}) {

  //etat du panier
  const [basket, setBasket] = useState(basketItems);

  // MAJ du panier
  const updateBasket = (newBasket) => {
    setBasket(newBasket);
  };

  return (
    <BasketPreviewStyled>
      <p>Your basket</p>
      {basketItems.length > 0 ? (
        <ul>
          {basketItems.map((item) => (
            <li key={item.id}>{item.title} - {item.quantity} - {item.price}</li>
          ))}
        </ul>
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
`;
