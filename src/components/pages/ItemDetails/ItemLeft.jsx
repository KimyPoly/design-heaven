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
    box-shadow: 10px 5px 5px #e66465;
    height: 100vh;
    width: 100%;
    object-fit: cover;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  }

`;
