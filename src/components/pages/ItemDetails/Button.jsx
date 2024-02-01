import styled from 'styled-components'
import { Link } from "react-router-dom";

export default function Button({to, label }) {
  return (
    <ButtonStyled as={to ? Link : 'button'} to={to} >
      {label}
      {/* <Link to="/showroom">Back to the showroom</Link> */}
    </ButtonStyled>
  )
}
const ButtonStyled = styled.button`
  background: #f27e56;
  /* margin: 2em;
  padding: 1.5em; */
  border: none;
  border-radius: 16px;
  transition: background 0.5s;
  cursor: pointer;

  &:hover {
    background: #e66465;
  }

`;
