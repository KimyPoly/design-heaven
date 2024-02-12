import {createContext} from "react"


const ShopContext = createContext({

  basket: [],
  handleAdddToBasket: () => {},
  handleDeleteBasketProduct: () => {}
})

export default ShopContext
