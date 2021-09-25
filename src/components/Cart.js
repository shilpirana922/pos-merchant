import React from "react";
import QuantityStepper from "./QuantityStepper";
import PropTypes from "prop-types";
import {Container, ListGroup, ListGroupItem,Button,Card, CardBody, CardHeader, CardFooter,Row, Col,} from "reactstrap";


 const Cart = ({cartItem,  buyNow, removeItem, increaseValue, decreaseValue})=>{

    let amount =0;
    cartItem.forEach(item => {
        amount= parseFloat(amount)+ parseFloat(item.productPrice)
    });

   
     return(
         <Container fluid>
            <h1 className="text-success">Current Cart </h1>
            <ListGroup  className="shadow-lg bg-white rounded">
                {cartItem.map(item =>(
                    <ListGroupItem key={item.id}>
                       <Row>
                           <Col>
                           <img height={80} src={item.tinyImage} alt="food-item"/>
                           </Col>
                           <Col className="text-center">
                               <div className="text-primary">
                                   {item.productName}
                               </div>
                             <div>Price: RS {item.productPrice}</div>
                             <Button color="warning" onClick={()=> removeItem(item)}>Remove</Button>
                             <QuantityStepper increaseValue={increaseValue} decreaseValue={decreaseValue} item={item}/>
                             
                           </Col>
                       </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>

        {/* if list is empty */}
        {
            cartItem.length >= 1 ? (
              <Card className="text-center mt-3">
                  <CardHeader>Grand Total</CardHeader>
                  <CardBody>
                      Your amount for {cartItem.length} product is RS: {amount}
                  </CardBody>
                    <CardFooter>
                        <Button className="text-warning" onClick={buyNow}>Pay Here</Button>
                    </CardFooter>
              </Card>
            ): 
            (<h1 className="text-warning">Cart is Empty</h1>)
        }
         </Container>
     )
 }

 Cart.propTypes = {
    cartItem: PropTypes.array,
    buyNow: PropTypes.func,
    removeItem: PropTypes.func,
    increaseValue: PropTypes.func, 
    decreaseValue: PropTypes.func
};

 export default Cart;