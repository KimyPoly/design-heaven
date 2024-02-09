import styled from 'styled-components'

export default function BasketItems({basket}) {
  return (
    <BasketItemsStyled>
       <ul>
          {basket.map((item) => (
            <li key={item.id}>{item.title} - {item.quantity} - {item.price}</li>
          ))}
        </ul>
    </BasketItemsStyled>
  )
}
const BasketItemsStyled = styled.div`

`;
