import styled from 'styled-components'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function HomeCarousel() {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <HomeCarouselStyled>

     <Slider {...settings}>
        <div>
          <img src="https://th.bing.com/th/id/OIG.FHYSoYoA3FR8VcpUcYhc?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Image 1" />
        </div>
        <div>
          <img src="https://th.bing.com/th/id/OIG.XM4pztvpcd1cFw4_tttw?pid=ImgGn" alt="Image 2" />
        </div>
        <div>
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
  :hover {
    
  }
  img {
    width: 500px;
   height: 300px;
   object-fit: fill;
  }

`;
