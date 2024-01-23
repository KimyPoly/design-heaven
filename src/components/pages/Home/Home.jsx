import styled from 'styled-components'
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';

export default function Home() {
  return (
    <HomeStyled>
      <HomeLeft/>
      <HomeRight/>
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: auto;
  margin: 0;
  /* background: linear-gradient(#FF9843, #e66465); */
  background: #f5c2a8;
  color: white;

`
