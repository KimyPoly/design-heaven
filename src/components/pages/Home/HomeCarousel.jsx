import styled from 'styled-components'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useNavigate } from "react-router-dom"
export default function HomeCarousel() {

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  }

  const navigate = useNavigate()

  const handleClick = (event) => {
    event.preventDefault()
    navigate('/showroom')
  }

  return (
    <HomeCarouselStyled>
      <p className='description'>
      ✨Discover our special selection of furnitures✨
      </p>
     <Slider {...settings}>
        <div onClick={handleClick}>
          <img src="https://th.bing.com/th/id/OIG.FHYSoYoA3FR8VcpUcYhc?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Image 1" />
        </div>
        <div onClick={handleClick}>
          <img src="https://th.bing.com/th/id/OIG.XM4pztvpcd1cFw4_tttw?pid=ImgGn" alt="Image 2" />
        </div>
        <div onClick={handleClick}>
          <img src="https://th.bing.com/th/id/OIG.pMGDbTEkYlIXS1vI9L2c?pid=ImgGn" alt="Image 2" />
        </div>
      </Slider>

    </HomeCarouselStyled>
  )
}

const HomeCarouselStyled = styled.div`
  width: 500px;
  height: 300px;
  margin: auto;
  cursor: pointer;
  transition: box-shadow 0.5s;
  border-radius: 50px;
  position: relative;


  &:hover {
    /* opacity: 0.8; */
    box-shadow: 10px 5px 5px #e66465;
  }

  img {
   width: 500px;
   height: 300px;
   object-fit: fill;
   transition: border-radius 1s;
   border-radius: 50px;
   border-top: 2px solid #e66465;
   border-bottom: 2px solid #e66465;
  }
  p{
    font-size: 24px;
    /* color: teal; */
    margin-left: 1.5em;
    position: absolute;
    z-index: 1;
    text-align: center;
    text-shadow: 10px 5px 5px #e66465  ;
  }

`
