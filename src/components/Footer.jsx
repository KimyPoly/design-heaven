import styled from 'styled-components'
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6";




export default function Footer() {
  return (
    <FooterStyled>
      <div className="social-media">
        <FaInstagram />
        <FaFacebook />
        <FaSquareXTwitter />
      </div>
      <div className="adress">
        <p>Design Heaven
          <br />
        Rue des Arts, 75016 Paris</p>
      </div>
    </FooterStyled>
  )
}

const FooterStyled = styled.div`
  width: 100%;
  height: 70px;
  position: absolute;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;


  background: #f27e56;
  font-size: 2em;

  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) ;
  border-top-left-radius: 50px;

  svg {
    color: #e66465;
    cursor: pointer;
    padding-left: 1em;

    &:hover {
      color: white;
      font-size: 1.2em;

    }
  }
  p {
    font-size: 0.5em;
    color: white;
    font-family: 'Noto Serif', serif;
  }
`
