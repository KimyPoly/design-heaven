import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import { fakeFurnitures } from "../../../fakeData/fakeFurnitures.jsx";
import Navbar from '../../Navbar.jsx';
import ItemLeft from './ItemLeft.jsx';
import ItemRight from './ItemRight.jsx';

export default function ItemDetails() {

  const { id } = useParams();
  const selectedItem = fakeFurnitures.find(item => item.id == id);

  return (
    <ItemDetailsStyled>
      {/* <Navbar/> */}
      <div className='main-item'>
       <ItemLeft img={selectedItem.img}/>
       <ItemRight
        title={selectedItem.title}
        price={selectedItem.price}
        description={selectedItem.description}
       />
      </div>
    </ItemDetailsStyled>
  )
}
const ItemDetailsStyled = styled.div`
  height: 100vh;
  background: #f5c2a8;

  .main-item {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
  }

`;
