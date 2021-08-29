import { useState } from "react";
import Header from "./Components/Layout/Headerfile";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";


function App() {
  const [cartisShown,setCarIsShown]=useState(false);
  const ShowCartHandler=()=>{
    setCarIsShown(true);
  }
  const hideCartHandler=()=>{
      setCarIsShown(false);
  }
  return (
    <CartProvider>
    {cartisShown && <Cart onClose={hideCartHandler}/>}
    <Header onShowCart={ShowCartHandler}/>
    <main>
      <Meals/>
    </main>
    </CartProvider>
  );
}

export default App;
