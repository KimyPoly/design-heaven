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
  background: #e66465;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Rubik Burned', system-ui;
  font-size: 2em;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 50px;
  

  a{
    text-decoration: none;
    color: white;
    transition: color 1s;

    &:hover {
      color: #f27e56;
    }
  }
`
