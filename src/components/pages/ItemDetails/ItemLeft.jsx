import styled from 'styled-components'

export default function ItemLeft({img}) {
  return (
    <ItemLeftStyled>
      <img src={img} alt="" />
    </ItemLeftStyled>
  )
}

const ItemLeftStyled = styled.div`
  height: 100vh;
  width: 8em;
  img {
    


  }

`;
