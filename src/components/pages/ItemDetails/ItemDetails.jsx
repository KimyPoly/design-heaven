import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import { fakeFurnitures } from "../../../fakeData/fakeFurnitures.jsx";
import Navbar from '../../Navbar.jsx';

export default function ItemDetails() {

  const { id } = useParams();
  const selectedItem = fakeFurnitures.find(item => item.id == id);
  const { title, price, description, img } = selectedItem;

  return (
    <ItemDetailsStyled>
      <Navbar/>
      
    </ItemDetailsStyled>
  )
}
const ItemDetailsStyled = styled.div`

`;
