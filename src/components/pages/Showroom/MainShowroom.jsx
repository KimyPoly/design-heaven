import styled from 'styled-components'
import Item from './Item';
import { fakeFurnitures } from "../../../fakeData/fakeFurnitures.jsx";
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function MainShowroom() {

  const [furniture, setFurniture] = useState(fakeFurnitures)
  // const mainRef = useRef(null);

  // useEffect(() => {
  //   const scrollInterval = setInterval(() => {
  //     if (mainRef.current) {
  //       mainRef.current.scrollLeft += 1;
  //     }
  //   }, 10);

  //   return () => clearInterval(scrollInterval);
  // }, []);

  return (
    <MainShowroomStyled >
      < div className='text'>
        <p>Our Trendy Furnitures</p>
      </div>
      <div className='main-page'>
        {furniture.map((furnitureItem) => (
         <Link key={furnitureItem.id} to={`/furnitures/${furnitureItem.id}`}>
           <Item {...furnitureItem} />
         </Link>
        ))}
      </div>
    </MainShowroomStyled>
  )
}
const MainShowroomStyled = styled.div`
  margin-top: 4em;
  background: #f5c2a8;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) ;
  height: 60%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  justify-items: center;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;


  .main-page {
    cursor: pointer;
    padding-top: 2.5em;
    padding-right: 2em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-row-gap: 180px;
    justify-items:center;
    scroll-behavior: smooth;
    overflow-y: auto;
    width: 100%;
    height: 54vh;
    margin-right: 1em;
    justify-content: center;
  }

  p {
    font-size: 5em;
    margin: 40px 0;
    font-family: 'Satisfy', cursive;
    color: white;
  }

  .text p {
    padding-left: 0.3em;
    padding-right: 0.3em;
    font-family: 'Noto Serif', serif;
  }
`
