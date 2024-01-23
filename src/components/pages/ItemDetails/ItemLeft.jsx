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
  
  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  }

`;
