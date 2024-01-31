import styled from 'styled-components'

export default function BasketPreview() {
  return (
    <BasketPreviewStyled>
      BasketPreview
    </BasketPreviewStyled>
  )
}
const BasketPreviewStyled = styled.div`
  background: white;
  height: 50vh;
  width: 40vh;
  position: absolute;
  right: 0;
  z-index: 1;
`;
