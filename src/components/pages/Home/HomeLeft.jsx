import styled from 'styled-components'

export default function HomeLeft() {
  return (
    <HomeLeftStyled>
       <p>Design Heaven</p>
    </HomeLeftStyled>
  )
}
const HomeLeftStyled = styled.div`
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(https://th.bing.com/th/id/OIG.DPIHWO5gZ_qLYfLuRs.8?pid=ImgGn);
  object-fit: cover;
  display: flex;
  align-items: center;
  font-family: 'Rubik Burned', system-ui;
  font-weight: 400;
  font-size: 60px;

  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;

  p {
  text-align: center;
  margin: 0;
  font-size: 2em;

  background-image: linear-gradient(
    -225deg,
    teal 0%,
    #ff1361 29%,
    #e66465 67%,
    #f27e56 100%
  );

  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 3s linear infinite;
  display: inline-block;

  @keyframes textclip {
  to {
    background-position: 200% center;
  }
 }
}
`
