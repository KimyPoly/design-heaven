import styled from 'styled-components'

export default function BasketCard({title}) {
  return (
    <BasketCardStyled>
      <h3>{title}</h3>
    </BasketCardStyled>
  )
}

const BasketCardStyled = styled.div`

`;
