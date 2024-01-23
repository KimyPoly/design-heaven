import styled from 'styled-components'

export default function ItemRight({title, price, description}) {
  return (
    <ItemRightStyled>
      <h1>{title}</h1>
      <p>{description}</p>
      <h3>{price} €</h3>
    </ItemRightStyled>
  )
}
const ItemRightStyled = styled.div`
  height: 100vh;
  text-align: center;
  h1 {
    font-size: 4em;
    margin-top: 2em;
    color:#e66465;
  }

  p {
    margin: 2em;
    color:#FF9843;
  }

`;
