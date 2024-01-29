import styled from 'styled-components'
import Navbar from '../../Navbar';
import MainShowroom from './MainShowroom';
import Footer from '../../Footer';

export default function Showroom() {

  return (
    <ShowroomStyled>
      <Navbar/>
      <MainShowroom/>
      <Footer/>
    </ShowroomStyled>
  )
}
const ShowroomStyled = styled.div`
  background: white;
  width: 100%;
  height: 100vh;
`
