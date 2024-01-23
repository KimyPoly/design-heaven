import styled from 'styled-components'
import { Link } from "react-router-dom";

export default function Button() {
  return (
    <ButtonStyled>
      <Link to="/showroom">Back to the showroom</Link>
    </ButtonStyled>
  )
}
const ButtonStyled = styled.button`
  a {
    text-decoration: none;
    
  }

`;
