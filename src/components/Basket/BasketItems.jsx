import styled from 'styled-components'
import BasketCard from './BasketCard';

export default function BasketItems({basket}) {
  return (
    <BasketItemsStyled>
       <ul>
          {basket.map((item) => (
            <div className='basket-card' key={item.id}>
            <BasketCard
              {...item}
            />
          </div>
          ))}
        </ul>
    </BasketItemsStyled>
  )
}
const BasketItemsStyled = styled.div`

`;

