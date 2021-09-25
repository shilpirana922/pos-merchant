import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import BuyNow from "./components/BuyPage.js"
import Cart from "./components/Cart.js"
import {Container, Row ,Col} from "reactstrap"


function App() {

const [cartItem, setCartItem] = useState([])

//--It checks to add the item in cart
const addInCart = item =>{
   const isAlreadyAdded = cartItem.findIndex(function(array){
       return array.id===item.id
  })
  if(isAlreadyAdded !== -1){
   cartItem[isAlreadyAdded].quantity += 1;
   cartItem[isAlreadyAdded].productPrice =  cartItem[isAlreadyAdded].initialPrice * cartItem[isAlreadyAdded].quantity;
   setCartItem([...cartItem])
   return;
  }

  setCartItem([...cartItem,item])
}

// -------Buy Function----
const buyNow = ()=>{
  setCartItem([]);
  toast("Purchase Complete",{
    type : "success"
  })
}

// Remove Function
const removeItem = (item)=>{
  setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id));
}


//quantity stepper
const decreaseValue =(item)=>{
  if(item.quantity === 1) {
    return;
  }
   const isAlreadyAdded = cartItem.findIndex(function(array){
    return array.id===item.id
   })
    if(isAlreadyAdded !== -1){
    cartItem[isAlreadyAdded].quantity -= 1;
    cartItem[isAlreadyAdded].productPrice = cartItem[isAlreadyAdded].initialPrice * cartItem[isAlreadyAdded].quantity;
    setCartItem([...cartItem])
}
}

const increaseValue =(item)=>{
   const isAlreadyAdded = cartItem.findIndex(function(array){
    return array.id===item.id
})
    if(isAlreadyAdded !== -1){
    cartItem[isAlreadyAdded].quantity += 1;
    cartItem[isAlreadyAdded].productPrice = cartItem[isAlreadyAdded].initialPrice * cartItem[isAlreadyAdded].quantity;
    setCartItem([...cartItem])
}
}
  return (
   <Container fluid>
      <ToastContainer/>
      <Row>
        <Col md="8">
          <BuyNow addInCart={addInCart}/>
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} decreaseValue={decreaseValue}  increaseValue = {increaseValue }removeItem={removeItem} buyNow={buyNow}/>
        </Col>
      </Row>
   </Container>

  );
}

export default App;
