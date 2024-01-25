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
  border-radius: 50px;

  img {
    width: 280px;
    height: 330px;
    border-radius: 50px;
    box-shadow: 0 0 10px 10px #e66465;
    cursor: pointer;

    &:hover {
    opacity: 0.8;
  }
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
