import styled from 'styled-components'
import Navbar from '../../Navbar';

export default function Showroom() {

  return (
    <ShowroomStyled>
      <Navbar/>
      Showroom
    </ShowroomStyled>
  )
}
const ShowroomStyled = styled.div`
  width: 100%;
  height: 100vh;
  background: red;
`;
