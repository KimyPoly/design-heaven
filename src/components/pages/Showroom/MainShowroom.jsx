import styled from 'styled-components'
import Item from './Item';
import { fakeFurnitures } from "../../../fakeData/fakeFurnitures.jsx";
import { useState } from 'react';

export default function MainShowroom() {

  const [furniture, setFurniture] = useState(fakeFurnitures)
  return (
    <MainShowroomStyled>
       {furniture.map((furnitureItem) => (
        <Item key={furnitureItem.id} {...furnitureItem}/>
      ))}
    </MainShowroomStyled>
  )
}
const MainShowroomStyled = styled.div`
  background-color: teal;
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
