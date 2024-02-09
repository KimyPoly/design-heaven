import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket.jsx";

export const useBasket = () => {
  const [basket, setbasket] = useState(fakeBasket.SMALL)

  return {basket}
}
