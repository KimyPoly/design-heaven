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
        <p>Trendy Furnitures</p>
      </div>
      <div className='main'>
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
  /* border-top: 3px solid white;
  border-bottom: 2px solid white; */
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
  height: 70%;
  /* padding: 0px 50px 150px 0; */

  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-items: center;
  overflow-y: auto;

  .main {
    padding-top: 2em;
    padding-right: 2em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-row-gap: 110px;
    justify-items:center;
    scroll-behavior: smooth;
    width: 100%;
  }

  p {
    font-size: 5em;
    margin: 40px 0;
    font-family: 'Satisfy', cursive;
    color: white;
  }

  .text p {
    padding-left: 0.3em;

  }
`;
