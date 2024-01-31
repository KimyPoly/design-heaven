import styled from 'styled-components'
import Navbar from '../../Navbar/Navbar.jsx';
import MainShowroom from './MainShowroom';
import Footer from '../../Footer';
import BasketPreview from '../../Basket/BasketPreview.jsx';

export default function Showroom() {

  return (
    <ShowroomStyled>
      <Navbar/>
      <BasketPreview/>
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
