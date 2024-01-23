import styled from 'styled-components'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <NavbarStyled>
      <Link to="/">
        <span>Design Heaven</span>
      </Link>

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
  font-size: 2em;

  a{
    text-decoration: none;
    color: #f27e56;
    transition: color 1s;

    &:hover {
      color: #e66465;
    }
  }
`
