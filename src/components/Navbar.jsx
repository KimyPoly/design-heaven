import styled from 'styled-components'

export default function Navbar() {
  return (
    <NavbarStyled>
      <span>Design Heaven</span>

    </NavbarStyled>
  )
}
const NavbarStyled = styled.div`
  width: 100%;
  height: 70px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Rubik Burned', system-ui;
  font-size: 3em;
  color: #f27e56;
  border: 1px solid #f27e56;
`
