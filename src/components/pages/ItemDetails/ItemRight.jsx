import styled from 'styled-components'
import Button from './Button';

export default function ItemRight({title, price, description}) {
  return (
    <ItemRightStyled>
      <div className='item-description'>
        <h1>{title}</h1>
        <p>{description}</p>
        <h3>{price} €</h3>
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

`
