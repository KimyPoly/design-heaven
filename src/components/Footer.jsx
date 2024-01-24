import styled from 'styled-components'

export default function Footer() {
  return (
    <FooterStyled>Footer</FooterStyled>
  )
}

const FooterStyled = styled.div`
  width: 100%;
  height: 70px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Rubik Burned', system-ui;
  font-size: 2em;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
  border-top-left-radius: 50px;
  border: 2px solid #FF9843;
  position: absolute;
  bottom: 0;
`;
