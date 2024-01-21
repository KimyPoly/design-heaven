import styled from 'styled-components'
import HomeCarousel from './HomeCarousel'

export default function HomeRight() {
  return (
    <HomeRightStyled>
      <div className='top-description'>
        <h1>Design & Trendy</h1>
        <h2>As your life style</h2>
      </div>
      <p className='description'>
        Discover our special selection of furnitures.
        Put more ✨glitters✨ in your life !
      </p>
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
      box-shadow: 0 16px #e66465;
      font-size: 2.5em;

    }
    h2 {
      margin-top: 0;
      margin-bottom: 0;
      box-shadow: 0 16px #f27e56 ;
    }
  }

  p{
    font-size: 22px;
    color: teal;
    margin: 0;
  }
`
