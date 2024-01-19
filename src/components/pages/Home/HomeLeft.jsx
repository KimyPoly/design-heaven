import styled from 'styled-components'

export default function HomeLeft() {
  return (
    <HomeLeftStyled>
      <div className="hight-div">
        <div className="inner-div"><p>Design</p></div>
        <div className="inner-div"></div>
      </div>
      <div className="low-div">
        <div className="inner-div"></div>
        <div className="inner-div"><p>Heaven</p></div>
      </div>
    </HomeLeftStyled>
  )
}
const HomeLeftStyled = styled.div`
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(https://th.bing.com/th/id/OIG.DPIHWO5gZ_qLYfLuRs.8?pid=ImgGn);
  object-fit: cover;
  display: grid;
  grid-template-rows: 1fr 1fr;
  font-family: 'Rubik Burned', system-ui;
  font-weight: 400;
  font-size: 60px;

  .hight-div {
    border-bottom: solid 3px #f27e56;
    /* border-top: none;
    border-right: none;
    border-left: none; */
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .low-div {
    border-top: solid 3px #f27e56;
    /* border-bottom: none;
    border-right: none;
    border-left: none; */
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  .inner-div {
    border: solid 3px #e66465;
    padding: 20px;
  }

  p {
    text-shadow: 1px 1px 3px #FFB996;
  }
`;
