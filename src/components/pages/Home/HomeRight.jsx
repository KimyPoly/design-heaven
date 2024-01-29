import styled from 'styled-components'
import HomeCarousel from './HomeCarousel'

export default function HomeRight() {
  return (
    <HomeRightStyled>
      <div className='top-description'>
        <h1>Design & Trendy</h1>
        <h2>As your lifestyle</h2>
      </div>
      <HomeCarousel/>
    </HomeRightStyled>
  )
}
const HomeRightStyled = styled.div`
  text-align: center;
  font-family: 'Satisfy', cursive;


  .top-description {
    font-size: 30px;
    margin-bottom: 2em;

    h1 {
      margin-bottom: 0;
      box-shadow: 60px 16px #e66465;
      font-size: 2.5em;

    }
    h2 {
      margin-top: 0;
      margin-bottom: 0;
      color: #f27e56;
    }
  }


`
