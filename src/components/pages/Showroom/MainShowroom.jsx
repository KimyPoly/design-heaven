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
      {furniture.map((furnitureItem) => (
       <Link key={furnitureItem.id} to={`/furnitures/${furnitureItem.id}`}>
         <Item {...furnitureItem} />
       </Link>
      ))}
    </MainShowroomStyled>
  )
}
const MainShowroomStyled = styled.div`
  border-top: 3px solid white;
  border-bottom: 2px solid white;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
  height: 60vh;
  padding: 50px 50px 150px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 80px;
  justify-items:center;

  overflow-y: auto;
  scroll-behavior: smooth;
`;
