import styled from 'styled-components'
import Navbar from '../../Navbar';
import MainShowroom from './MainShowroom';

export default function Showroom() {

  return (
    <ShowroomStyled>
      <Navbar/>

      {/* <div className="main"> */}
        <MainShowroom/>
      {/* </div> */}

    </ShowroomStyled>
  )
}
const ShowroomStyled = styled.div`
  background: #f5c2a8;
  width: 100%;
  height: 100vh;
  /* background: linear-gradient(#FF9843, #e66465); */

  .main {
    width: 100%;
    height: 50vh;
  }
`
