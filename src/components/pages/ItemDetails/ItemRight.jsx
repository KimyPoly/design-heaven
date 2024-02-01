import styled from 'styled-components'
import Button from './Button';
import { useState } from 'react';

export default function ItemRight({title, price, description}) {

  const [quantity, setQuantity]= useState(0)

  const handleIncrement = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1)
    } else {
      alert("Sorry ! You can't order more than 5 items");
    }
  }

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <ItemRightStyled>
      <div className='item-description'>
        <h1>{title}</h1>
        <p>{description}</p>
        <h3>{price} €</h3>

        <div className='price-and-button'>
          <button onClick={handleDecrement}>-</button>
          <span> {quantity} </span>
          <button onClick={handleIncrement}>+</button>
          <Button to='/' label="Shop !"/>
        </div>

      </div>
      <Button to="/showroom" label="Back to the showroom" />
    </ItemRightStyled>
  )
}
const ItemRightStyled = styled.div`
  height: 100vh;
  text-align: center;
  font-family: 'Satisfy', cursive;

  h1 {
    font-size: 4.5em;
    margin-top: 2em;
    color:white;
    box-shadow: 60px 16px #e66465;
  }

  p {
    margin: 2em;
    color: white;
    border: 4px solid #f27e56;
    padding: 1em;
    font-size: 1em;
    font-family: 'Noto Serif', serif;
  }

  h3 {
    color: white;
    font-size: 3em;
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    font-family: 'Satisfy', cursive;
    color: white;
    font-size: 1.5em;
  }


`
