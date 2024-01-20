import styled from 'styled-components'

export default function Item({id, title, img}) {
  return (
    <ItemStyled>
      <img src={img} alt={title} />
      <p className='img-title' >{title}</p>
    </ItemStyled>
  )
}
const ItemStyled = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  img {
    width: 250px;
    height: 250px;
  }

  .img-title {
    font-size: 2em;
    position: absolute;
    top: 80%;
    color: #f27e56;
    padding-left: 1em;
    width: 100%;
  }

`
