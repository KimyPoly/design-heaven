import styled from 'styled-components'
import Navbar from '../../Navbar';
import MainShowroom from './MainShowroom';

export default function Showroom() {

  return (
    <ShowroomStyled>
      <Navbar/>
      <p>Trendy Furniture</p>
      <div className="main">
        <MainShowroom/>
      </div>

    </ShowroomStyled>
  )
}
const ShowroomStyled = styled.div`
  width: 100%;
  height: 100vh;

  p {
    font-size: 5em;
    margin: 40px 0;
    font-family: 'Satisfy', cursive;
  }

  .main {
    width: 100%;
    height: 60vh;
  }
`
